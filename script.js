let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('scene') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 立方体のテクスチャ
let loader = new THREE.CubeTextureLoader();
let texture = loader.load([
    'images/front.jpg', 'images/back.jpg', 'images/reft.jpg', 'images/right.jpg', 'images/top.jpg', 'images/under.jpg'
]);
scene.background = texture;

// カメラ操作設定
let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;
controls.enablePan = false;
controls.enableRotate = false;

// 左クリック時のみ視点移動
document.addEventListener('mousedown', (event) => {
    if (event.button === 0) { // 左クリックのみ
        controls.enableRotate = true;
    }
});

document.addEventListener('mouseup', () => {
    controls.enableRotate = false;
});

// 📌 ホットスポット（クリックすると視点移動）
let hotspotPositions = [
    { x: 2, y: 0, z: 0 },  // 右側へ移動
    { x: -2, y: 0, z: 0 }, // 左側へ移動
    { x: 0, y: 2, z: 0 },  // 上に移動
    { x: 0, y: -2, z: 0 }  // 下に移動
];

hotspotPositions.forEach(pos => {
    let hotspot = new THREE.Mesh(new THREE.SphereGeometry(0.1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    hotspot.position.set(pos.x, pos.y, pos.z);
    scene.add(hotspot);

    hotspot.userData = { target: pos }; // クリックで移動する座標
});

// ホットスポットをクリックするとカメラ移動
document.addEventListener('click', (event) => {
    let mouse = new THREE.Vector2((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);
    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    
    let intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0 && intersects[0].object.userData.target) {
        let targetPos = intersects[0].object.userData.target;
        
        // なめらかに視点移動
        new TWEEN.Tween(camera.position)
            .to({ x: targetPos.x, y: targetPos.y, z: targetPos.z }, 1000) // 1秒で移動
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();
    }
});

camera.position.z = 0.1;

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    TWEEN.update(); // カメラ移動アニメーションを更新
    renderer.render(scene, camera);
}

animate();
