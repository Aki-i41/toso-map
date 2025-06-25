// 各シーンの画像パスおよびホットスポット（遷移先）を定義
var scenes = {
  "scene1": {
    textures: {
      posx: "img/scene1/posx.jpg",
      negx: "img/scene1/negx.jpg",
      posy: "img/scene1/posy.jpg",
      negy: "img/scene1/negy.jpg",
      posz: "img/scene1/posz.jpg",  // 前
      negz: "img/scene1/negz.jpg"   // 後
    },
    hotspots: {
      // キューブ内の面（順番は以下の indices [front, back, top, bottom, right, left] と対応）
      front: "scene2",  // 前面をダブルクリック／ダブルタップすると scene2 に遷移
      back:  null,
      top:   null,
      bottom:null,
      right: null,
      left:  null
    }
  },
  "scene2": {
    textures: {
      posx: "img/scene2/posx.jpg",
      negx: "img/scene2/negx.jpg",
      posy: "img/scene2/posy.jpg",
      negy: "img/scene2/negy.jpg",
      posz: "img/scene2/posz.jpg",
      negz: "img/scene2/negx.jpg" // ※例として、back面をホットスポットに設定
    },
    hotspots: {
      front: null,
      back: "scene1", 
      top: null,
      bottom: null,
      right: null,
      left: null
    }
  }
};

// SceneManager オブジェクトはシーン切替を管理
var SceneManager = {
  currentScene: null,
  cube: null,
  sceneData: scenes,
  loader: new THREE.TextureLoader(),

  // sceneKey（"scene1" 等）を与えて、六面体を生成・配置する
  loadScene: function(sceneKey, threeScene) {
    this.currentScene = sceneKey;
    // 既存のキューブがあればシーンから削除
    if (this.cube) {
      threeScene.remove(this.cube);
    }
    var data = this.sceneData[sceneKey];

    // マテリアルの順番は以下の通り：
    // 0: front (posz), 1: back (negz), 2: top (posy), 3: bottom (negy), 4: right (posx), 5: left (negx)
    var materials = [];
    materials.push(new THREE.MeshBasicMaterial({
      map: this.loader.load(data.textures.posz),
      side: THREE.BackSide
    }));
    materials.push(new THREE.MeshBasicMaterial({
      map: this.loader.load(data.textures.negz),
      side: THREE.BackSide
    }));
    materials.push(new THREE.MeshBasicMaterial({
      map: this.loader.load(data.textures.posy),
      side: THREE.BackSide
    }));
    materials.push(new THREE.MeshBasicMaterial({
      map: this.loader.load(data.textures.negy),
      side: THREE.BackSide
    }));
    materials.push(new THREE.MeshBasicMaterial({
      map: this.loader.load(data.textures.posx),
      side: THREE.BackSide
    }));
    materials.push(new THREE.MeshBasicMaterial({
      map: this.loader.load(data.textures.negx),
      side: THREE.BackSide
    }));

    // キューブを生成（サイズは適宜調整）
    var geometry = new THREE.BoxGeometry(500, 500, 500);
    this.cube = new THREE.Mesh(geometry, materials);
    threeScene.add(this.cube);
  },

  // クリック／タップされた面に対応するホットスポットのシーンキーを返す
  // faceIndices: 0 => front, 1 => back, 2 => top, 3 => bottom, 4 => right, 5 => left
  getHotspotScene: function(faceIndex) {
    var keys = ["front", "back", "top", "bottom", "right", "left"];
    var key = keys[faceIndex];
    return this.sceneData[this.currentScene].hotspots[key];
  }
};
