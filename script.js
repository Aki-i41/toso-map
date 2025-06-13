let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('scene') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 立方体のテクスチャ（初期画像）
let loader = new THREE.CubeTextureLoader();
let texture = loader.load([
    'images/front.jpg', 'images/back.jpg', 'images/left.jpg',
    'images/right.jpg', 'images/top.jpg', 'images/under.jpg'
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

// 📌 ホットスポット（クリックすると別の画像に切り替え）
let panoramaImages = {
    hotspot1: [
        'images/front_1.jpg', 'images/back_1.jpg', 'images/left_1.jpg',
        'images/right_1.jpg', 'images/top_1.jpg', 'images/under_1.jpg'
    ],
    hotspot2: [
        'images/front_2.jpg', 'images/back_2.jpg', 'images/left_2.jpg',
        'images/right_2.jpg', 'images/top_2.jpg', 'images/under_2.jpg'
    ],
    hotspot3: [
        'images/front_3.jpg', 'images/back_3.jpg', 'images/left_3.jpg',
        'images/right_3.jpg', 'images/top_3.jpg', 'images/under_3.jpg'
    ]
};

// ホットスポットの座標（それぞれ異なる画像に切り替え）
let hotspots = [
    { x: 2, y: 2, z: 0, target: 'hotspot1' },
    { x: -2, y: 0, z: 0, target: 'hotspot2' },
    { x: 0, y: 2, z: 0, target: 'hotspot3' }
];

// ホットスポットを作成
hotspots.forEach(pos => {
    let hotspot = new THREE.Mesh(
        new THREE.SphereGeometry(0.2),  // 大きめのサイズ
        new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 1.0 }) // 目立つ色 & 透明度調整
    );
    hotspot.position.set(pos.x, pos.y, pos.z);
    scene.add(hotspot);
})

// ホットスポットをクリックすると画像切り替え
document.addEventListener('mousedown', (event) => {
    let mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );
    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    let intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
        let clickedObject = intersects[0].object;
        if (clickedObject.userData.target) {
            let loader = new THREE.CubeTextureLoader();
            let texture = loader.load(panoramaImages[clickedObject.userData.target]);
            scene.background = texture;
        }
    }
});

// なめらかな視点移動
camera.position.z = 0.1;

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    TWEEN.update();
    renderer.render(scene, camera);
}

animate();

document.addEventListener("click", (event) => {
    console.log("クリックした座標: ", event.clientX, event.clientY);
});


    if (intersects.length > 0) {
        console.log("クリックした3D座標: ", intersects[0].point);
    }
});
