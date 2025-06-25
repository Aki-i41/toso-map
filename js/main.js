var scene, camera, renderer, raycaster, mouse;
var isUserInteracting = false,
    onPointerDownMouseX = 0,
    onPointerDownMouseY = 0,
    lon = 0,
    lat = 0;
var lastTapTime = 0; // タッチデバイス用ダブルタップ判定用

init();
animate();

function init() {
  // シーン・カメラ・レンダラーの作成
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
  camera.position.set(0, 0, 0);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // raycaster とマウス座標の初期化
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  // 初期シーンとして "scene1" をロード
  SceneManager.loadScene("scene1", scene);

  // イベントリスナーの設定
  // ダブルクリック（デスクトップ）およびタッチでのダブルタップ（スマホ）
  window.addEventListener("dblclick", onDoubleClick, false);
  window.addEventListener("touchend", onTouchEnd, false);

  // 左クリック（ドラッグ）で視点移動のためのイベント
  window.addEventListener("mousedown", onDocumentMouseDown, false);
  window.addEventListener("mousemove", onDocumentMouseMove, false);
  window.addEventListener("mouseup", onDocumentMouseUp, false);

  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// ─── マウスドラッグによる視点回転 ───────────────────────────

function onDocumentMouseDown(event) {
  isUserInteracting = true;
  onPointerDownMouseX = event.clientX;
  onPointerDownMouseY = event.clientY;
}

function onDocumentMouseMove(event) {
  if (isUserInteracting) {
    // マウスの移動量から水平・垂直の角度を更新
    var movementX = event.clientX - onPointerDownMouseX;
    var movementY = event.clientY - onPointerDownMouseY;
    lon += movementX * 0.1;
    lat -= movementY * 0.1;
    // 垂直方向は 85° までに制限（画面上下が過剰にならないように）
    lat = Math.max(-85, Math.min(85, lat));
    onPointerDownMouseX = event.clientX;
    onPointerDownMouseY = event.clientY;
  }
}

function onDocumentMouseUp(event) {
  isUserInteracting = false;
}

// ─── ダブルクリック／ダブルタップでシーン切替 ───────────────────────────

function onDoubleClick(event) {
  handleInteraction(event.clientX, event.clientY);
}

function onTouchEnd(event) {
  var currentTime = new Date().getTime();
  var tapInterval = currentTime - lastTapTime;
  // 300ms以内の連続タップでダブルタップと判定
  if (tapInterval > 0 && tapInterval < 300) {
    var touch = event.changedTouches[0];
    handleInteraction(touch.clientX, touch.clientY);
    // 一部デバイスでの二重イベント防止のため
    event.preventDefault();
  }
  lastTapTime = currentTime;
}

// クリック／タップ位置からRaycasterで面を判定しホットスポットでシーン切替
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

// ─── アニメーションループ ───────────────────────────

function animate() {
  requestAnimationFrame(animate);
  // マウスドラッグによって更新された lon, lat を用い、カメラの向きを計算
  var phi = THREE.Math.degToRad(90 - lat);
  var theta = THREE.Math.degToRad(lon);
  var target = new THREE.Vector3();
  target.x = Math.sin(phi) * Math.cos(theta);
  target.y = Math.cos(phi);
  target.z = Math.sin(phi) * Math.sin(theta);
  camera.lookAt(target);

  renderer.render(scene, camera);
}
