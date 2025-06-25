// 画面全体の初期グローバル変数
var scene, camera, renderer, raycaster, mouse;
var isUserInteracting = false,
    onPointerDownMouseX = 0,
    onPointerDownMouseY = 0,
    lon = 0,
    lat = 0;
var touchX = 0, touchY = 0; // モバイル用スワイプの座標管理
var lastTapTime = 0; // ダブルタップ検出用（シーン切替）

init();
animate();

function init() {
  // シーンの作成
  scene = new THREE.Scene();

  // スマホかどうかの判定（ユーザーエージェント、またはウィンドウ幅を利用）
  var isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent) || window.innerWidth < 768;
  
  // スマホの場合は FOV を広くしてズームアウト状態にする（例：90°）
  var fov = isMobile ? 120 : 75;
  camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 1100);
  camera.position.set(0, 0, 0);

  // レンダラーの作成
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // raycaster とマウス座標の初期化
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  // 初期シーンとして "scene1" をロード（SceneManager のコードは別ファイルで管理）
  SceneManager.loadScene("scene1", scene);

  // イベントリスナーの設定
  // --- デスクトップ用 ---
  window.addEventListener("mousedown", onDocumentMouseDown, false);
  window.addEventListener("mousemove", onDocumentMouseMove, false);
  window.addEventListener("mouseup", onDocumentMouseUp, false);
  window.addEventListener("dblclick", onDoubleClick, false);
  
  // --- スマホ用（ダブルタップ／スワイプ）---
  window.addEventListener("touchstart", onTouchStart, false);
  window.addEventListener("touchmove", onTouchMove, false);
  window.addEventListener("touchend", onTouchEnd, false);
  
  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// ── マウスドラッグによる視点操作 ─────────────────
function onDocumentMouseDown(event) {
  isUserInteracting = true;
  onPointerDownMouseX = event.clientX;
  onPointerDownMouseY = event.clientY;
}

function onDocumentMouseMove(event) {
  if (isUserInteracting) {
    var movementX = event.clientX - onPointerDownMouseX;
    var movementY = event.clientY - onPointerDownMouseY;
    lon += movementX * 0.1;
    lat -= movementY * 0.1;
    lat = Math.max(-85, Math.min(85, lat));
    onPointerDownMouseX = event.clientX;
    onPointerDownMouseY = event.clientY;
  }
}

function onDocumentMouseUp(event) {
  isUserInteracting = false;
}

// ── タッチ操作による視点操作（スワイプ） ─────────────────
function onTouchStart(event) {
  // ダブルタップ等のシーン切替と、スワイプ動作どちらも扱うため、
  // まずタッチ座標の記録
  if (event.touches.length === 1) {
    touchX = event.touches[0].clientX;
    touchY = event.touches[0].clientY;
  }
}

function onTouchMove(event) {
  if (event.touches.length === 1) {
    var newX = event.touches[0].clientX;
    var newY = event.touches[0].clientY;
    var deltaX = newX - touchX;
    var deltaY = newY - touchY;
    
    lon -= deltaX * 1;
    lat += deltaY * 1;
    lat = Math.max(-85, Math.min(85, lat));
    
    touchX = newX;
    touchY = newY;
    
    event.preventDefault(); // ページのスクロールを抑止
  }
}

// ── タッチ終了処理（ダブルタップ検出） ─────────────────
function onTouchEnd(event) {
  // ダブルタップの検出（300ms以内の連続タップ）
  var currentTime = new Date().getTime();
  var tapInterval = currentTime - lastTapTime;
  if (tapInterval > 0 && tapInterval < 300) { 
    var touch = event.changedTouches[0];
    handleInteraction(touch.clientX, touch.clientY);
    event.preventDefault();
  }
  lastTapTime = currentTime;
}

// ── ダブルクリック／ダブルタップでシーン切替 ─────────────────
function onDoubleClick(event) {
  handleInteraction(event.clientX, event.clientY);
}

// 共通の処理：クリック／タップ位置からどの面が対象かを判定し、ホットスポットに基づくシーン切替を行う
function handleInteraction(clientX, clientY) {
  mouse.x = (clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (clientY / window.innerHeight) * 2 + 1;
  
  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObject(SceneManager.cube);
  
  if (intersects.length > 0) {
    var faceIndex = intersects[0].face.materialIndex;
    var targetScene = SceneManager.getHotspotScene(faceIndex);
    if (targetScene) {
      SceneManager.loadScene(targetScene, scene);
    }
  }
}

// ── アニメーションループ ─────────────────
function animate() {
  requestAnimationFrame(animate);
  
  // マウスやタッチスワイプで更新された lon, lat を元にカメラの向きを計算
  var phi = THREE.Math.degToRad(90 - lat);
  var theta = THREE.Math.degToRad(lon);
  var target = new THREE.Vector3();
  target.x = Math.sin(phi) * Math.cos(theta);
  target.y = Math.cos(phi);
  target.z = Math.sin(phi) * Math.sin(theta);
  camera.lookAt(target);
  
  renderer.render(scene, camera);
}
