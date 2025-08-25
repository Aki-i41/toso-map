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
      negz: "img/scene2/negx.jpg" 
    },
    hotspots: {
      front: "scene31",
      back: "scene1", 
      top: null,
      bottom: null,
      right: "scene25",
      left: "scene3"
    }
  }
};
 "scene3": {
    textures: {
      posx: "img/scene3/posx.jpg",
      negx: "img/scene3/negx.jpg",
      posy: "img/scene3/posy.jpg",
      negy: "img/scene3/negy.jpg",
      posz: "img/scene3/posz.jpg",
      negz: "img/scene3/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: "scene2",
      left: "scene4"
    }
};
 "scene4": {
    textures: {
      posx: "img/scene4/posx.jpg",
      negx: "img/scene4/negx.jpg",
      posy: "img/scene4/posy.jpg",
      negy: "img/scene4/negy.jpg",
      posz: "img/scene4/posz.jpg",
      negz: "img/scene4/negx.jpg" 
    },
    hotspots: {
      front: "scene65",
      back: null, 
      top: null,
      bottom: null,
      right: "scene3",
      left: "scene5"
    }
  }
};
 "scene5": {
    textures: {
      posx: "img/scene5/posx.jpg",
      negx: "img/scene5/negx.jpg",
      posy: "img/scene5/posy.jpg",
      negy: "img/scene5/negy.jpg",
      posz: "img/scene5/posz.jpg",
      negz: "img/scene5/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: "scene4",
      left: "scene"6
    }
  }
};
 "scene6": {
    textures: {
      posx: "img/scene6/posx.jpg",
      negx: "img/scene6/negx.jpg",
      posy: "img/scene6/posy.jpg",
      negy: "img/scene6/negy.jpg",
      posz: "img/scene6/posz.jpg",
      negz: "img/scene6/negx.jpg" 
    },
    hotspots: {
      front: "scene7",
      back: null, 
      top: null,
      bottom: null,
      right: "scene5",
      left: null
    }
  }
};
 "scene7": {
    textures: {
      posx: "img/scene7/posx.jpg",
      negx: "img/scene7/negx.jpg",
      posy: "img/scene7/posy.jpg",
      negy: "img/scene7/negy.jpg",
      posz: "img/scene7/posz.jpg",
      negz: "img/scene7/negx.jpg" 
    },
    hotspots: {
      front: "scene8",
      back: "scene6", 
      top: null,
      bottom: null,
      right: "scene67",
      left: null
    }
  }
};
 "scene8": {
    textures: {
      posx: "img/scene8/posx.jpg",
      negx: "img/scene8/negx.jpg",
      posy: "img/scene8/posy.jpg",
      negy: "img/scene8/negy.jpg",
      posz: "img/scene8/posz.jpg",
      negz: "img/scene8/negx.jpg" 
    },
    hotspots: {
      front: "scene9",
      back: "scene7", 
      top: null,
      bottom: null,
      right: "scene66",
      left: null
    }
  }
};
 "scene9": {
    textures: {
      posx: "img/scene9/posx.jpg",
      negx: "img/scene9/negx.jpg",
      posy: "img/scene9/posy.jpg",
      negy: "img/scene9/negy.jpg",
      posz: "img/scene9/posz.jpg",
      negz: "img/scene9/negx.jpg" 
    },
    hotspots: {
      front: "scene10",
      back: "scene8", 
      top: null,
      bottom: null,
      right: "scene"46,
      left: null
    }
  }
};
 "scene10": {
    textures: {
      posx: "img/scene10/posx.jpg",
      negx: "img/scene10/negx.jpg",
      posy: "img/scene10/posy.jpg",
      negy: "img/scene10/negy.jpg",
      posz: "img/scene10/posz.jpg",
      negz: "img/scene10/negx.jpg" 
    },
    hotspots: {
      front: "scene11",
      back: "scene9", 
      top: null,
      bottom: null,
      right: "scene68",
      left: null
    }
  }
};
 "scene11": {
    textures: {
      posx: "img/scene11/posx.jpg",
      negx: "img/scene11/negx.jpg",
      posy: "img/scene11/posy.jpg",
      negy: "img/scene11/negy.jpg",
      posz: "img/scene11/posz.jpg",
      negz: "img/scene11/negx.jpg" 
    },
    hotspots: {
      front: "scene12",
      back: "scene10", 
      top: null,
      bottom: null,
      right: "scene14",
      left: null
    }
  }
};
 "scene12": {
    textures: {
      posx: "img/scene12/posx.jpg",
      negx: "img/scene12/negx.jpg",
      posy: "img/scene12/posy.jpg",
      negy: "img/scene12/negy.jpg",
      posz: "img/scene12/posz.jpg",
      negz: "img/scene12/negx.jpg" 
    },
    hotspots: {
      front: "scene13",
      back: "scene11", 
      top: null,
      bottom: null,
      right: null,
      left: null
    }
  }
};
 "scene13": {
    textures: {
      posx: "img/scene13/posx.jpg",
      negx: "img/scene13/negx.jpg",
      posy: "img/scene13/posy.jpg",
      negy: "img/scene13/negy.jpg",
      posz: "img/scene13/posz.jpg",
      negz: "img/scene13/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: "scene12", 
      top: null,
      bottom: null,
      right: null,
      left: null
    }
  }
};
 "scene14": {
    textures: {
      posx: "img/scene14/posx.jpg",
      negx: "img/scene14/negx.jpg",
      posy: "img/scene14/posy.jpg",
      negy: "img/scene14/negy.jpg",
      posz: "img/scene14/posz.jpg",
      negz: "img/scene14/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: "scene49", 
      top: null,
      bottom: null,
      right: "scene"15,
      left: "scene11"
    }
  }
};
 "scene15": {
    textures: {
      posx: "img/scene15/posx.jpg",
      negx: "img/scene15/negx.jpg",
      posy: "img/scene15/posy.jpg",
      negy: "img/scene15/negy.jpg",
      posz: "img/scene15/posz.jpg",
      negz: "img/scene15/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: "scene70", 
      top: null,
      bottom: null,
      right: "scene69",
      left: "scene14"
    }
  }
};
 "scene16": {
    textures: {
      posx: "img/scene16/posx.jpg",
      negx: "img/scene16/negx.jpg",
      posy: "img/scene16/posy.jpg",
      negy: "img/scene16/negy.jpg",
      posz: "img/scene16/posz.jpg",
      negz: "img/scene16/negx.jpg" 
    },
    hotspots: {
      front: "scene69",
      back: null, 
      top: null,
      bottom: null,
      right: "scene17",
      left: "scene70"
    }
  }
};
 "scene17": {
    textures: {
      posx: "img/scene17/posx.jpg",
      negx: "img/scene17/negx.jpg",
      posy: "img/scene17/posy.jpg",
      negy: "img/scene17/negy.jpg",
      posz: "img/scene17/posz.jpg",
      negz: "img/scene17/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: "scene54", 
      top: null,
      bottom: null,
      right: "scene18",
      left: "scene16"
    }
  }
};
 "scene18": {
    textures: {
      posx: "img/scene18/posx.jpg",
      negx: "img/scene18/negx.jpg",
      posy: "img/scene18/posy.jpg",
      negy: "img/scene18/negy.jpg",
      posz: "img/scene18/posz.jpg",
      negz: "img/scene18/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: "scene19", 
      top: null,
      bottom: null,
      right: null,
      left: "scene17"
    }
  }
};
 "scene19": {
    textures: {
      posx: "img/scene19/posx.jpg",
      negx: "img/scene19/negx.jpg",
      posy: "img/scene19/posy.jpg",
      negy: "img/scene19/negy.jpg",
      posz: "img/scene19/posz.jpg",
      negz: "img/scene19/negx.jpg" 
    },
    hotspots: {
      front: "scene18",
      back: "scene20", 
      top: null,
      bottom: null,
      right: null,
      left: "scene56"
    }
  }
};
 "scene20": {
    textures: {
      posx: "img/scene20/posx.jpg",
      negx: "img/scene20/negx.jpg",
      posy: "img/scene20/posy.jpg",
      negy: "img/scene20/negy.jpg",
      posz: "img/scene20/posz.jpg",
      negz: "img/scene20/negx.jpg" 
    },
    hotspots: {
      front: "scene19",
      back: "scene21", 
      top: null,
      bottom: null,
      right: null,
      left: null
    }
  }
};
 "scene21": {
    textures: {
      posx: "img/scene21/posx.jpg",
      negx: "img/scene21/negx.jpg",
      posy: "img/scene21/posy.jpg",
      negy: "img/scene21/negy.jpg",
      posz: "img/scene21/posz.jpg",
      negz: "img/scene21/negx.jpg" 
    },
    hotspots: {
      front: "scene20",
      back: "scene22", 
      top: null,
      bottom: null,
      right: null,
      left: "scene62"
    }
  }
};
 "scene22": {
    textures: {
      posx: "img/scene22/posx.jpg",
      negx: "img/scene22/negx.jpg",
      posy: "img/scene22/posy.jpg",
      negy: "img/scene22/negy.jpg",
      posz: "img/scene22/posz.jpg",
      negz: "img/scene22/negx.jpg" 
    },
    hotspots: {
      front: "scene21",
      back: "scene24", 
      top: null,
      bottom: null,
      right: null,
      left: "scene23"
    }
  }
};
 "scene23": {
    textures: {
      posx: "img/scene23/posx.jpg",
      negx: "img/scene23/negx.jpg",
      posy: "img/scene23/posy.jpg",
      negy: "img/scene23/negy.jpg",
      posz: "img/scene23/posz.jpg",
      negz: "img/scene23/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: "scene"22,
      left: "scene41"
    }
  }
};
 "scene24": {
    textures: {
      posx: "img/scene24/posx.jpg",
      negx: "img/scene24/negx.jpg",
      posy: "img/scene24/posy.jpg",
      negy: "img/scene24/negy.jpg",
      posz: "img/scene24/posz.jpg",
      negz: "img/scene24/negx.jpg" 
    },
    hotspots: {
      front: "scene22",
      back: "scene30", 
      top: null,
      bottom: null,
      right: null,
      left: "scene42"
    }
  }
};
 "scene25": {
    textures: {
      posx: "img/scene25/posx.jpg",
      negx: "img/scene25/negx.jpg",
      posy: "img/scene25/posy.jpg",
      negy: "img/scene25/negy.jpg",
      posz: "img/scene25/posz.jpg",
      negz: "img/scene25/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: "scene26",
      left: "scene2"
    }
  }
};
 "scene26": {
    textures: {
      posx: "img/scene26/posx.jpg",
      negx: "img/scene26/negx.jpg",
      posy: "img/scene26/posy.jpg",
      negy: "img/scene26/negy.jpg",
      posz: "img/scene26/posz.jpg",
      negz: "img/scene26/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: "scene27",
      left: "scene25"
    }
  }
};
 "scene27": {
    textures: {
      posx: "img/scene27/posx.jpg",
      negx: "img/scene27/negx.jpg",
      posy: "img/scene27/posy.jpg",
      negy: "img/scene27/negy.jpg",
      posz: "img/scene27/posz.jpg",
      negz: "img/scene27/negx.jpg" 
    },
    hotspots: {
      front: "scene30",
      back: null, 
      top: null,
      bottom: null,
      right: "scene28",
      left: "scene26"
    }
  }
};
 "scene28": {
    textures: {
      posx: "img/scene28/posx.jpg",
      negx: "img/scene28/negx.jpg",
      posy: "img/scene28/posy.jpg",
      negy: "img/scene28/negy.jpg",
      posz: "img/scene28/posz.jpg",
      negz: "img/scene28/negx.jpg" 
    },
    hotspots: {
      front: "scene29",
      back: null, 
      top: null,
      bottom: null,
      right: null,
      left: "scene27"
    }
  }
};
 "scene29": {
    textures: {
      posx: "img/scene29/posx.jpg",
      negx: "img/scene29/negx.jpg",
      posy: "img/scene29/posy.jpg",
      negy: "img/scene29/negy.jpg",
      posz: "img/scene29/posz.jpg",
      negz: "img/scene29/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: null,
      left: "scene30"
    }
  }
};
 "scene30": {
    textures: {
      posx: "img/scene30/posx.jpg",
      negx: "img/scene30/negx.jpg",
      posy: "img/scene30/posy.jpg",
      negy: "img/scene30/negy.jpg",
      posz: "img/scene30/posz.jpg",
      negz: "img/scene30/negx.jpg" 
    },
    hotspots: {
      front: "scene24",
      back: "scene27", 
      top: null,
      bottom: null,
      right: "scene29",
      left: null
    }
  }
};
 "scene31": {
    textures: {
      posx: "img/scene31/posx.jpg",
      negx: "img/scene31/negx.jpg",
      posy: "img/scene31/posy.jpg",
      negy: "img/scene31/negy.jpg",
      posz: "img/scene31/posz.jpg",
      negz: "img/scene31/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: "scene2", 
      top: null,
      bottom: null,
      right: null,
      left: "scene32"
    }
  }
};
 "scene32": {
    textures: {
      posx: "img/scene32/posx.jpg",
      negx: "img/scene32/negx.jpg",
      posy: "img/scene32/posy.jpg",
      negy: "img/scene32/negy.jpg",
      posz: "img/scene32/posz.jpg",
      negz: "img/scene32/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: "scene31",
      left: "scene33"
    }
  }
};
 "scene33": {
    textures: {
      posx: "img/scene33/posx.jpg",
      negx: "img/scene33/negx.jpg",
      posy: "img/scene33/posy.jpg",
      negy: "img/scene33/negy.jpg",
      posz: "img/scene33/posz.jpg",
      negz: "img/scene33/negx.jpg" 
    },
    hotspots: {
      front: "scene34",
      back: "scene65", 
      top: null,
      bottom: null,
      right: "scene32",
      left: "scene67"
    }
  }
};
 "scene34": {
    textures: {
      posx: "img/scene34/posx.jpg",
      negx: "img/scene34/negx.jpg",
      posy: "img/scene34/posy.jpg",
      negy: "img/scene34/negy.jpg",
      posz: "img/scene34/posz.jpg",
      negz: "img/scene34/negx.jpg" 
    },
    hotspots: {
      front: "scene35",
      back: "scene33", 
      top: null,
      bottom: null,
      right: null,
      left: "scene64"
    }
  }
};
 "scene35": {
    textures: {
      posx: "img/scene35/posx.jpg",
      negx: "img/scene35/negx.jpg",
      posy: "img/scene35/posy.jpg",
      negy: "img/scene35/negy.jpg",
      posz: "img/scene35/posz.jpg",
      negz: "img/scene35/negx.jpg" 
    },
    hotspots: {
      front: "scene63",
      back: "scene34", 
      top: null,
      bottom: null,
      right: null,
      left: null
    }
  }
};
 "scene36": {
    textures: {
      posx: "img/scene36/posx.jpg",
      negx: "img/scene36/negx.jpg",
      posy: "img/scene36/posy.jpg",
      negy: "img/scene36/negy.jpg",
      posz: "img/scene36/posz.jpg",
      negz: "img/scene36/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: "scene37",
      left: "scene63"
    }
  }
};
 "scene37": {
    textures: {
      posx: "img/scene37/posx.jpg",
      negx: "img/scene37/negx.jpg",
      posy: "img/scene37/posy.jpg",
      negy: "img/scene37/negy.jpg",
      posz: "img/scene37/posz.jpg",
      negz: "img/scene37/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: "scene38",
      left: "scene36"
    }
  }
};
 "scene38": {
    textures: {
      posx: "img/scene38/posx.jpg",
      negx: "img/scene38/negx.jpg",
      posy: "img/scene38/posy.jpg",
      negy: "img/scene38/negy.jpg",
      posz: "img/scene38/posz.jpg",
      negz: "img/scene38/negx.jpg" 
    },
    hotspots: {
      front: "scene43",
      back: "scene73", 
      top: null,
      bottom: null,
      right: "scene39",
      left: "scene37"
    }
  }
};
 "scene39": {
    textures: {
      posx: "img/scene39/posx.jpg",
      negx: "img/scene39/negx.jpg",
      posy: "img/scene39/posy.jpg",
      negy: "img/scene39/negy.jpg",
      posz: "img/scene39/posz.jpg",
      negz: "img/scene39/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: "scene40",
      left: "scene38"
    }
  }
};
 "scene40": {
    textures: {
      posx: "img/scene40/posx.jpg",
      negx: "img/scene40/negx.jpg",
      posy: "img/scene40/posy.jpg",
      negy: "img/scene40/negy.jpg",
      posz: "img/scene40/posz.jpg",
      negz: "img/scene40/negx.jpg" 
    },
    hotspots: {
      front: "scene62",
      back: "scene41", 
      top: null,
      bottom: null,
      right: null,
      left: "scene39"
    }
  }
};
 "scene41": {
    textures: {
      posx: "img/scene41/posx.jpg",
      negx: "img/scene41/negx.jpg",
      posy: "img/scene41/posy.jpg",
      negy: "img/scene41/negy.jpg",
      posz: "img/scene41/posz.jpg",
      negz: "img/scene41/negx.jpg" 
    },
    hotspots: {
      front: "scene40",
      back: "scene42", 
      top: null,
      bottom: null,
      right: "scene23",
      left: null
    }
  }
};
 "scene42": {
    textures: {
      posx: "img/scene42/posx.jpg",
      negx: "img/scene42/negx.jpg",
      posy: "img/scene42/posy.jpg",
      negy: "img/scene42/negy.jpg",
      posz: "img/scene42/posz.jpg",
      negz: "img/scene42/negx.jpg" 
    },
    hotspots: {
      front: "scene41",
      back: null, 
      top: null,
      bottom: null,
      right: "scene24",
      left: "scene72"
    }
  }
};
 "scene43": {
    textures: {
      posx: "img/scene43/posx.jpg",
      negx: "img/scene43/negx.jpg",
      posy: "img/scene43/posy.jpg",
      negy: "img/scene43/negy.jpg",
      posz: "img/scene43/posz.jpg",
      negz: "img/scene43/negx.jpg" 
    },
    hotspots: {
      front: "scene44",
      back: "scene38", 
      top: null,
      bottom: null,
      right: null,
      left: null
    }
  }
};
 "scene44": {
    textures: {
      posx: "img/scene44/posx.jpg",
      negx: "img/scene44/negx.jpg",
      posy: "img/scene44/posy.jpg",
      negy: "img/scene44/negy.jpg",
      posz: "img/scene44/posz.jpg",
      negz: "img/scene44/negx.jpg" 
    },
    hotspots: {
      front: "scene52",
      back: "scene43", 
      top: null,
      bottom: null,
      right: null,
      left: "scene45"
    }
  }
};
 "scene45": {
    textures: {
      posx: "img/scene45/posx.jpg",
      negx: "img/scene45/negx.jpg",
      posy: "img/scene45/posy.jpg",
      negy: "img/scene45/negy.jpg",
      posz: "img/scene45/posz.jpg",
      negz: "img/scene45/negx.jpg" 
    },
    hotspots: {
      front: "scene"50,
      back: null, 
      top: null,
      bottom: null,
      right: "scene44",
      left: "scene46"
    }
  }
};
 "scene46": {
    textures: {
      posx: "img/scene46/posx.jpg",
      negx: "img/scene46/negx.jpg",
      posy: "img/scene46/posy.jpg",
      negy: "img/scene46/negy.jpg",
      posz: "img/scene46/posz.jpg",
      negz: "img/scene46/negx.jpg" 
    },
    hotspots: {
      front: "scene47",
      back: "scene63", 
      top: null,
      bottom: null,
      right: "scene45",
      left: "scene9"
    }
  }
};
 "scene47": {
    textures: {
      posx: "img/scene47/posx.jpg",
      negx: "img/scene47/negx.jpg",
      posy: "img/scene47/posy.jpg",
      negy: "img/scene47/negy.jpg",
      posz: "img/scene47/posz.jpg",
      negz: "img/scene47/negx.jpg" 
    },
    hotspots: {
      front: "scene48",
      back: "scene47", 
      top: null,
      bottom: null,
      right: null,
      left: null
    }
  }
};
 "scene48": {
    textures: {
      posx: "img/scene48/posx.jpg",
      negx: "img/scene48/negx.jpg",
      posy: "img/scene48/posy.jpg",
      negy: "img/scene48/negy.jpg",
      posz: "img/scene48/posz.jpg",
      negz: "img/scene48/negx.jpg" 
    },
    hotspots: {
      front: "scene49",
      back: "scene47", 
      top: null,
      bottom: null,
      right: null,
      left: "scene68"
    }
  }
};
 "scene49": {
    textures: {
      posx: "img/scene49/posx.jpg",
      negx: "img/scene49/negx.jpg",
      posy: "img/scene49/posy.jpg",
      negy: "img/scene49/negy.jpg",
      posz: "img/scene49/posz.jpg",
      negz: "img/scene49/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: null,
      left: null
    }
  }
};
 "scene50": {
    textures: {
      posx: "img/scene50/posx.jpg",
      negx: "img/scene50/negx.jpg",
      posy: "img/scene50/posy.jpg",
      negy: "img/scene50/negy.jpg",
      posz: "img/scene50/posz.jpg",
      negz: "img/scene50/negx.jpg" 
    },
    hotspots: {
      front: "scene70",
      back: "scene45", 
      top: null,
      bottom: null,
      right: "scene51",
      left: null
    }
  }
};
 "scene51": {
    textures: {
      posx: "img/scene51/posx.jpg",
      negx: "img/scene51/negx.jpg",
      posy: "img/scene51/posy.jpg",
      negy: "img/scene51/negy.jpg",
      posz: "img/scene51/posz.jpg",
      negz: "img/scene51/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: scene45, 
      top: null,
      bottom: null,
      right: scene52,
      left: scene51
    }
  }
};
 "scene52": {
    textures: {
      posx: "img/scene52/posx.jpg",
      negx: "img/scene52/negx.jpg",
      posy: "img/scene52/posy.jpg",
      negy: "img/scene52/negy.jpg",
      posz: "img/scene52/posz.jpg",
      negz: "img/scene52/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: scene44, 
      top: null,
      bottom: null,
      right: null,
      left: scene51
    }
  }
};
 "scene53": {
    textures: {
      posx: "img/scene53/posx.jpg",
      negx: "img/scene53/negx.jpg",
      posy: "img/scene53/posy.jpg",
      negy: "img/scene53/negy.jpg",
      posz: "img/scene53/posz.jpg",
      negz: "img/scene53/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: scene57, 
      top: null,
      bottom: null,
      right: null,
      left: null
    }
  }
};
 "scene54": {
    textures: {
      posx: "img/scene54/posx.jpg",
      negx: "img/scene54/negx.jpg",
      posy: "img/scene54/posy.jpg",
      negy: "img/scene54/negy.jpg",
      posz: "img/scene54/posz.jpg",
      negz: "img/scene54/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: scene55,
      left: scene53
    }
  }
};
 "scene55": {
    textures: {
      posx: "img/scene55/posx.jpg",
      negx: "img/scene55/negx.jpg",
      posy: "img/scene55/posy.jpg",
      negy: "img/scene55/negy.jpg",
      posz: "img/scene55/posz.jpg",
      negz: "img/scene55/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: scene56, 
      top: null,
      bottom: null,
      right: null,
      left: null
    }
  }
};
 "scene56": {
    textures: {
      posx: "img/scene56/posx.jpg",
      negx: "img/scene56/negx.jpg",
      posy: "img/scene56/posy.jpg",
      negy: "img/scene56/negy.jpg",
      posz: "img/scene56/posz.jpg",
      negz: "img/scene56/negx.jpg" 
    },
    hotspots: {
      front: scene55,
      back: null, 
      top: null,
      bottom: null,
      right: null,
      left: scene57
    }
  }
};
 "scene57": {
    textures: {
      posx: "img/scene57/posx.jpg",
      negx: "img/scene57/negx.jpg",
      posy: "img/scene57/posy.jpg",
      negy: "img/scene57/negy.jpg",
      posz: "img/scene57/posz.jpg",
      negz: "img/scene57/negx.jpg" 
    },
    hotspots: {
      front: scene53,
      back: null, 
      top: null,
      bottom: null,
      right: scene56,
      left: scene58
    }
  }
};
 "scene58": {
    textures: {
      posx: "img/scene58/posx.jpg",
      negx: "img/scene58/negx.jpg",
      posy: "img/scene58/posy.jpg",
      negy: "img/scene58/negy.jpg",
      posz: "img/scene58/posz.jpg",
      negz: "img/scene58/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: scene60, 
      top: null,
      bottom: null,
      right: scene57,
      left: null
    }
  }
};
 "scene59": {
    textures: {
      posx: "img/scene59/posx.jpg",
      negx: "img/scene59/negx.jpg",
      posy: "img/scene59/posy.jpg",
      negy: "img/scene59/negy.jpg",
      posz: "img/scene59/posz.jpg",
      negz: "img/scene59/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: null,
      left: null
    }
  }
};
 "scene60": {
    textures: {
      posx: "img/scene60/posx.jpg",
      negx: "img/scene60/negx.jpg",
      posy: "img/scene60/posy.jpg",
      negy: "img/scene60/negy.jpg",
      posz: "img/scene60/posz.jpg",
      negz: "img/scene60/negx.jpg" 
    },
    hotspots: {
      front: scene58,
      back: scene61, 
      top: null,
      bottom: null,
      right: null,
      left: null
    }
  }
};
 "scene61": {
    textures: {
      posx: "img/scene61/posx.jpg",
      negx: "img/scene61/negx.jpg",
      posy: "img/scene61/posy.jpg",
      negy: "img/scene61/negy.jpg",
      posz: "img/scene61/posz.jpg",
      negz: "img/scene61/negx.jpg" 
    },
    hotspots: {
      front: scene60,
      back: null, 
      top: null,
      bottom: null,
      right: scene62,
      left: null
    }
  }
};
 "scene62": {
    textures: {
      posx: "img/scene62/posx.jpg",
      negx: "img/scene62/negx.jpg",
      posy: "img/scene62/posy.jpg",
      negy: "img/scene62/negy.jpg",
      posz: "img/scene62/posz.jpg",
      negz: "img/scene62/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: scene40, 
      top: null,
      bottom: null,
      right: scene21,
      left: scene61
    }
  }
};
 "scene63": {
    textures: {
      posx: "img/scene63/posx.jpg",
      negx: "img/scene63/negx.jpg",
      posy: "img/scene63/posy.jpg",
      negy: "img/scene63/negy.jpg",
      posz: "img/scene63/posz.jpg",
      negz: "img/scene63/negx.jpg" 
    },
    hotspots: {
      front: scene46,
      back: scene64, 
      top: null,
      bottom: null,
      right: scene36,
      left: scene66
    }
  }
};
 "scene64": {
    textures: {
      posx: "img/scene64/posx.jpg",
      negx: "img/scene64/negx.jpg",
      posy: "img/scene64/posy.jpg",
      negy: "img/scene64/negy.jpg",
      posz: "img/scene64/posz.jpg",
      negz: "img/scene64/negx.jpg" 
    },
    hotspots: {
      front: scene63,
      back: scene65, 
      top: null,
      bottom: null,
      right: scene34,
      left: null
    }
  }
};
 "scene65": {
    textures: {
      posx: "img/scene65/posx.jpg",
      negx: "img/scene65/negx.jpg",
      posy: "img/scene65/posy.jpg",
      negy: "img/scene65/negy.jpg",
      posz: "img/scene65/posz.jpg",
      negz: "img/scene65/negx.jpg" 
    },
    hotspots: {
      front: scene64,
      back: null, 
      top: null,
      bottom: null,
      right: null,
      left: null
    }
  }
};
 "scene66": {
    textures: {
      posx: "img/scene66/posx.jpg",
      negx: "img/scene66/negx.jpg",
      posy: "img/scene66/posy.jpg",
      negy: "img/scene66/negy.jpg",
      posz: "img/scene66/posz.jpg",
      negz: "img/scene66/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: scene63,
      left: scene8
    }
  }
};
 "scene67": {
    textures: {
      posx: "img/scene67/posx.jpg",
      negx: "img/scene67/negx.jpg",
      posy: "img/scene67/posy.jpg",
      negy: "img/scene67/negy.jpg",
      posz: "img/scene67/posz.jpg",
      negz: "img/scene67/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: scene33,
      left: scene7
    }
  }
};
 "scene68": {
    textures: {
      posx: "img/scene68/posx.jpg",
      negx: "img/scene68/negx.jpg",
      posy: "img/scene68/posy.jpg",
      negy: "img/scene68/negy.jpg",
      posz: "img/scene68/posz.jpg",
      negz: "img/scene68/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: scene48,
      left: scene10
    }
  }
};
 "scene69": {
    textures: {
      posx: "img/scene69/posx.jpg",
      negx: "img/scene69/negx.jpg",
      posy: "img/scene69/posy.jpg",
      negy: "img/scene69/negy.jpg",
      posz: "img/scene69/posz.jpg",
      negz: "img/scene69/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: scene16, 
      top: null,
      bottom: null,
      right: null,
      left: scene15
    }
  }
};
 "scene70": {
    textures: {
      posx: "img/scene70/posx.jpg",
      negx: "img/scene70/negx.jpg",
      posy: "img/scene70/posy.jpg",
      negy: "img/scene70/negy.jpg",
      posz: "img/scene70/posz.jpg",
      negz: "img/scene70/negx.jpg" 
    },
    hotspots: {
      front: scene15,
      back: scene50, 
      top: null,
      bottom: null,
      right: scene16,
      left: null
    }
  }
};
 "scene71": {
    textures: {
      posx: "img/scene71/posx.jpg",
      negx: "img/scene71/negx.jpg",
      posy: "img/scene71/posy.jpg",
      negy: "img/scene71/negy.jpg",
      posz: "img/scene71/posz.jpg",
      negz: "img/scene71/negx.jpg" 
    },
    hotspots: {
      front: scene45,
      back: scene36, 
      top: null,
      bottom: null,
      right: null,
      left: null
    }
  }
};
 "scene72": {
    textures: {
      posx: "img/scene72/posx.jpg",
      negx: "img/scene72/negx.jpg",
      posy: "img/scene72/posy.jpg",
      negy: "img/scene72/negy.jpg",
      posz: "img/scene72/posz.jpg",
      negz: "img/scene72/negx.jpg" 
    },
    hotspots: {
      front: null,
      back: null, 
      top: null,
      bottom: null,
      right: scene40,
      left: scene73
    }
  }
};
 "scene73": {
    textures: {
      posx: "img/scene73/posx.jpg",
      negx: "img/scene73/negx.jpg",
      posy: "img/scene73/posy.jpg",
      negy: "img/scene73/negy.jpg",
      posz: "img/scene73/posz.jpg",
      negz: "img/scene73/negx.jpg" 
    },
    hotspots: {
      front: scene38,
      back: null, 
      top: null,
      bottom: null,
      right: scene72,
      left: null
    }
  }
};
"k_scene 1": {
    textures: {
      posx: "img/k_scene 1/posx.jpg",
      negx: "img/k_scene 1/negx.jpg",
      posy: "img/k_scene 1/posy.jpg",
      negy: "img/k_scene 1/negy.jpg",
      posz: "img/k_scene 1/posz.jpg",
      negz: "img/k_scene 1/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 2",
      left: "scene34"
    }
  },
 "k_scene 2": {
    textures: {
      posx: "img/k_scene 2/posx.jpg",
      negx: "img/k_scene 2/negx.jpg",
      posy: "img/k_scene 2/posy.jpg",
      negy: "img/k_scene 2/negy.jpg",
      posz: "img/k_scene 2/posz.jpg",
      negz: "img/k_scene 2/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 3",
      left:  "k_scene 2"
    }
  },
 "k_scene 3": {
    textures: {
      posx: "img/k_scene 3/posx.jpg",
      negx: "img/k_scene 3/negx.jpg",
      posy: "img/k_scene 3/posy.jpg",
      negy: "img/k_scene 3/negy.jpg",
      posz: "img/k_scene 3/posz.jpg",
      negz: "img/k_scene 3/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 4",
      left:  "k_scene 2"
    }
  },
 "k_scene 4": {
    textures: {
      posx: "img/k_scene 4/posx.jpg",
      negx: "img/k_scene 4/negx.jpg",
      posy: "img/k_scene 4/posy.jpg",
      negy: "img/k_scene 4/negy.jpg",
      posz: "img/k_scene 4/posz.jpg",
      negz: "img/k_scene 4/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 5",
      left:  "k_scene 3"
    }
  },
 "k_scene 5": {
    textures: {
      posx: "img/k_scene 5/posx.jpg",
      negx: "img/k_scene 5/negx.jpg",
      posy: "img/k_scene 5/posy.jpg",
      negy: "img/k_scene 5/negy.jpg",
      posz: "img/k_scene 5/posz.jpg",
      negz: "img/k_scene 5/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 7",
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 6",
      left:  "k_scene 4"
    }
  },
 "k_scene 6": {
    textures: {
      posx: "img/k_scene 6/posx.jpg",
      negx: "img/k_scene 6/negx.jpg",
      posy: "img/k_scene 6/posy.jpg",
      negy: "img/k_scene 6/negy.jpg",
      posz: "img/k_scene 6/posz.jpg",
      negz: "img/k_scene 6/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 30", 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 10",
      left:  "k_scene 5"
    }
  },
 "k_scene 7": {
    textures: {
      posx: "img/k_scene 7/posx.jpg",
      negx: "img/k_scene 7/negx.jpg",
      posy: "img/k_scene 7/posy.jpg",
      negy: "img/k_scene 7/negy.jpg",
      posz: "img/k_scene 7/posz.jpg",
      negz: "img/k_scene 7/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 9", 
      back:  "k_scene 6",
      top:   null,
      bottom:null,
      right: null,
      left:  null
    }
  },
 "k_scene 8": {
    textures: {
      posx: "img/k_scene 8/posx.jpg",
      negx: "img/k_scene 8/negx.jpg",
      posy: "img/k_scene 8/posy.jpg",
      negy: "img/k_scene 8/negy.jpg",
      posz: "img/k_scene 8/posz.jpg",
      negz: "img/k_scene 8/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  "k_scene 9",
      top:   null,
      bottom:null,
      right: null,
      left:  null
    }
  },
 "k_scene 9": {
    textures: {
      posx: "img/k_scene 9/posx.jpg",
      negx: "img/k_scene 9/negx.jpg",
      posy: "img/k_scene 9/posy.jpg",
      negy: "img/k_scene 9/negy.jpg",
      posz: "img/k_scene 9/posz.jpg",
      negz: "img/k_scene 9/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 8", 
      back:  "k_scene 7",
      top:   null,
      bottom:null,
      right: null,
      left:  null
    }
  },
 "k_scene 10": {
    textures: {
      posx: "img/k_scene 10/posx.jpg",
      negx: "img/k_scene 10/negx.jpg",
      posy: "img/k_scene 10/posy.jpg",
      negy: "img/k_scene 10/negy.jpg",
      posz: "img/k_scene 10/posz.jpg",
      negz: "img/k_scene 10/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 11",
      left:  "k_scene 6"
    }
  },
 "k_scene 11": {
    textures: {
      posx: "img/k_scene 11/posx.jpg",
      negx: "img/k_scene 11/negx.jpg",
      posy: "img/k_scene 11/posy.jpg",
      negy: "img/k_scene 11/negy.jpg",
      posz: "img/k_scene 11/posz.jpg",
      negz: "img/k_scene 11/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 12",
      left:  "k_scene 10"
    }
  },
 "k_scene 12": {
    textures: {
      posx: "img/k_scene 12/posx.jpg",
      negx: "img/k_scene 12/negx.jpg",
      posy: "img/k_scene 12/posy.jpg",
      negy: "img/k_scene 12/negy.jpg",
      posz: "img/k_scene 12/posz.jpg",
      negz: "img/k_scene 12/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 13",
      left:  "k_scene 11"
    }
  },
 "k_scene 13": {
    textures: {
      posx: "img/k_scene 13/posx.jpg",
      negx: "img/k_scene 13/negx.jpg",
      posy: "img/k_scene 13/posy.jpg",
      negy: "img/k_scene 13/negy.jpg",
      posz: "img/k_scene 13/posz.jpg",
      negz: "img/k_scene 13/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  "k_scene 16",
      top:   null,
      bottom:null,
      right: "k_scene 14",
      left:  "k_scene 12"
    }
  },
 "k_scene 14": {
    textures: {
      posx: "img/k_scene 14/posx.jpg",
      negx: "img/k_scene 14/negx.jpg",
      posy: "img/k_scene 14/posy.jpg",
      negy: "img/k_scene 14/negy.jpg",
      posz: "img/k_scene 14/posz.jpg",
      negz: "img/k_scene 14/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 15",
      left:  "k_scene 13"
    }
  },
 "k_scene 15": {
    textures: {
      posx: "img/k_scene 15/posx.jpg",
      negx: "img/k_scene 15/negx.jpg",
      posy: "img/k_scene 15/posy.jpg",
      negy: "img/k_scene 15/negy.jpg",
      posz: "img/k_scene 15/posz.jpg",
      negz: "img/k_scene 15/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: null,
      left:  "k_scene 14"
    }
  },
 "k_scene 16": {
    textures: {
      posx: "img/k_scene 16/posx.jpg",
      negx: "img/k_scene 16/negx.jpg",
      posy: "img/k_scene 16/posy.jpg",
      negy: "img/k_scene 16/negy.jpg",
      posz: "img/k_scene 16/posz.jpg",
      negz: "img/k_scene 16/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 13",
      back:  "k_scene 17",
      top:   null,
      bottom:null,
      right: null,
      left:  null
    }
  },
 "k_scene 17": {
    textures: {
      posx: "img/k_scene 17/posx.jpg",
      negx: "img/k_scene 17/negx.jpg",
      posy: "img/k_scene 17/posy.jpg",
      negy: "img/k_scene 17/negy.jpg",
      posz: "img/k_scene 17/posz.jpg",
      negz: "img/k_scene 17/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 18",
      back:  "k_scene 16",
      top:   null,
      bottom:null,
      right: null,
      left:  null
    }
  },
 "k_scene 18": {
    textures: {
      posx: "img/k_scene 18/posx.jpg",
      negx: "img/k_scene 18/negx.jpg",
      posy: "img/k_scene 18/posy.jpg",
      negy: "img/k_scene 18/negy.jpg",
      posz: "img/k_scene 18/posz.jpg",
      negz: "img/k_scene 18/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  "k_scene 17",
      top:   null,
      bottom:null,
      right: "k_scene 19",
      left:  "k_scene 20"
    }
  },
 "k_scene 19": {
    textures: {
      posx: "img/k_scene 19/posx.jpg",
      negx: "img/k_scene 19/negx.jpg",
      posy: "img/k_scene 19/posy.jpg",
      negy: "img/k_scene 19/negy.jpg",
      posz: "img/k_scene 19/posz.jpg",
      negz: "img/k_scene 19/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: null,
      left: "k_scene 18"
    }
  },
 "k_scene 20": {
    textures: {
      posx: "img/k_scene 20/posx.jpg",
      negx: "img/k_scene 20/negx.jpg",
      posy: "img/k_scene 20/posy.jpg",
      negy: "img/k_scene 20/negy.jpg",
      posz: "img/k_scene 20/posz.jpg",
      negz: "img/k_scene 20/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 18",
      left:  "k_scene 21"
    }
  },
 "k_scene 21": {
    textures: {
      posx: "img/k_scene 21/posx.jpg",
      negx: "img/k_scene 21/negx.jpg",
      posy: "img/k_scene 21/posy.jpg",
      negy: "img/k_scene 21/negy.jpg",
      posz: "img/k_scene 21/posz.jpg",
      negz: "img/k_scene 21/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 20",
      left:  "k_scene 23"
    }
  },
 "k_scene 23": {
    textures: {
      posx: "img/k_scene 23/posx.jpg",
      negx: "img/k_scene 23/negx.jpg",
      posy: "img/k_scene 23/posy.jpg",
      negy: "img/k_scene 23/negy.jpg",
      posz: "img/k_scene 23/posz.jpg",
      negz: "img/k_scene 23/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 21",
      left:  "k_scene 24"
    }
  },
 "k_scene 24": {
    textures: {
      posx: "img/k_scene 24/posx.jpg",
      negx: "img/k_scene 24/negx.jpg",
      posy: "img/k_scene 24/posy.jpg",
      negy: "img/k_scene 24/negy.jpg",
      posz: "img/k_scene 24/posz.jpg",
      negz: "img/k_scene 24/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 23",
      left:  "k_scene 25"
    }
  },
 "k_scene 25": {
    textures: {
      posx: "img/k_scene 25/posx.jpg",
      negx: "img/k_scene 25/negx.jpg",
      posy: "img/k_scene 25/posy.jpg",
      negy: "img/k_scene 25/negy.jpg",
      posz: "img/k_scene 25/posz.jpg",
      negz: "img/k_scene 25/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 24",
      left:  "k_scene 26"
    }
  },
 "k_scene 26": {
    textures: {
      posx: "img/k_scene 26/posx.jpg",
      negx: "img/k_scene 26/negx.jpg",
      posy: "img/k_scene 26/posy.jpg",
      negy: "img/k_scene 26/negy.jpg",
      posz: "img/k_scene 26/posz.jpg",
      negz: "img/k_scene 26/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 30", 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 25",
      left:  "k_scene 27"
    }
  },
 "k_scene 27": {
    textures: {
      posx: "img/k_scene 27/posx.jpg",
      negx: "img/k_scene 27/negx.jpg",
      posy: "img/k_scene 27/posy.jpg",
      negy: "img/k_scene 27/negy.jpg",
      posz: "img/k_scene 27/posz.jpg",
      negz: "img/k_scene 27/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 30", 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 26",
      left:  "k_scene 28"
    }
  },
 "k_scene ": {
    textures: {
      posx: "img/k_scene /posx.jpg",
      negx: "img/k_scene /negx.jpg",
      posy: "img/k_scene /posy.jpg",
      negy: "img/k_scene /negy.jpg",
      posz: "img/k_scene /posz.jpg",
      negz: "img/k_scene /negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 27",
      left:  "k_scene 29"
    }
  },
 "k_scene 28": {
    textures: {
      posx: "img/k_scene 28/posx.jpg",
      negx: "img/k_scene 28/negx.jpg",
      posy: "img/k_scene 28/posy.jpg",
      negy: "img/k_scene 28/negy.jpg",
      posz: "img/k_scene 28/posz.jpg",
      negz: "img/k_scene 28/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 27",
      left:  "k_scene 29"
    }
  },
 "k_scene 29": {
    textures: {
      posx: "img/k_scene 29/posx.jpg",
      negx: "img/k_scene 29/negx.jpg",
      posy: "img/k_scene 29/posy.jpg",
      negy: "img/k_scene 29/negy.jpg",
      posz: "img/k_scene 29/posz.jpg",
      negz: "img/k_scene 29/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 28",
      left:  null
    }
  },
 "k_scene 30": {
    textures: {
      posx: "img/k_scene 30/posx.jpg",
      negx: "img/k_scene 30/negx.jpg",
      posy: "img/k_scene 30/posy.jpg",
      negy: "img/k_scene 30/negy.jpg",
      posz: "img/k_scene 30/posz.jpg",
      negz: "img/k_scene 30/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 31", 
      back:  "k_scene 26",
      top:   null,
      bottom:null,
      right: null,
      left:  null
    }
  },
 "k_scene 31": {
    textures: {
      posx: "img/k_scene 31/posx.jpg",
      negx: "img/k_scene 31/negx.jpg",
      posy: "img/k_scene 31/posy.jpg",
      negy: "img/k_scene 31/negy.jpg",
      posz: "img/k_scene 31/posz.jpg",
      negz: "img/k_scene 31/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 30", 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 35",
      left:  "k_scene 32"
    }
  },
 "k_scene 32": {
    textures: {
      posx: "img/k_scene 32/posx.jpg",
      negx: "img/k_scene 32/negx.jpg",
      posy: "img/k_scene 32/posy.jpg",
      negy: "img/k_scene 32/negy.jpg",
      posz: "img/k_scene 32/posz.jpg",
      negz: "img/k_scene 32/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 31",
      left:  "k_scene 33"
    }
  },
 "k_scene 33": {
    textures: {
      posx: "img/k_scene 33/posx.jpg",
      negx: "img/k_scene 33/negx.jpg",
      posy: "img/k_scene 33/posy.jpg",
      negy: "img/k_scene 33/negy.jpg",
      posz: "img/k_scene 33/posz.jpg",
      negz: "img/k_scene 33/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 32",
      left:  "k_scene 34"
    }
  },
 "k_scene 34": {
    textures: {
      posx: "img/k_scene 34/posx.jpg",
      negx: "img/k_scene 34/negx.jpg",
      posy: "img/k_scene 34/posy.jpg",
      negy: "img/k_scene 34/negy.jpg",
      posz: "img/k_scene 34/posz.jpg",
      negz: "img/k_scene 34/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 33",
      left:  null
    }
  },
 "k_scene 35": {
    textures: {
      posx: "img/k_scene 35/posx.jpg",
      negx: "img/k_scene 35/negx.jpg",
      posy: "img/k_scene 35/posy.jpg",
      negy: "img/k_scene 35/negy.jpg",
      posz: "img/k_scene 35/posz.jpg",
      negz: "img/k_scene 35/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 36",
      left:  "k_scene 31"
    }
  },
 "k_scene 36": {
    textures: {
      posx: "img/k_scene 36/posx.jpg",
      negx: "img/k_scene 36/negx.jpg",
      posy: "img/k_scene 36/posy.jpg",
      negy: "img/k_scene 36/negy.jpg",
      posz: "img/k_scene 36/posz.jpg",
      negz: "img/k_scene 36/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 37",
      left:  "k_scene 35"
    }
  },
 "k_scene 37": {
    textures: {
      posx: "img/k_scene 37/posx.jpg",
      negx: "img/k_scene 37/negx.jpg",
      posy: "img/k_scene 37/posy.jpg",
      negy: "img/k_scene 37/negy.jpg",
      posz: "img/k_scene 37/posz.jpg",
      negz: "img/k_scene 37/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 38",
      left:  "k_scene 36"
    }
  },
 "k_scene 38": {
    textures: {
      posx: "img/k_scene 38/posx.jpg",
      negx: "img/k_scene 38/negx.jpg",
      posy: "img/k_scene 38/posy.jpg",
      negy: "img/k_scene 38/negy.jpg",
      posz: "img/k_scene 38/posz.jpg",
      negz: "img/k_scene 38/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 39",
      left:  "k_scene 37"
    }
  },
 "k_scene 39": {
    textures: {
      posx: "img/k_scene 39/posx.jpg",
      negx: "img/k_scene 39/negx.jpg",
      posy: "img/k_scene 39/posy.jpg",
      negy: "img/k_scene 39/negy.jpg",
      posz: "img/k_scene 39/posz.jpg",
      negz: "img/k_scene 39/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 40",
      left:  "k_scene 38"
    }
  },
 "k_scene 40": {
    textures: {
      posx: "img/k_scene 40/posx.jpg",
      negx: "img/k_scene 40/negx.jpg",
      posy: "img/k_scene 40/posy.jpg",
      negy: "img/k_scene 40/negy.jpg",
      posz: "img/k_scene 40/posz.jpg",
      negz: "img/k_scene 40/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  "k_scene 41",
      top:   null,
      bottom:null,
      right: "k_scene 42",
      left:  "k_scene 39"
    }
  },
 "k_scene 41": {
    textures: {
      posx: "img/k_scene 41/posx.jpg",
      negx: "img/k_scene 41/negx.jpg",
      posy: "img/k_scene 41/posy.jpg",
      negy: "img/k_scene 41/negy.jpg",
      posz: "img/k_scene 41/posz.jpg",
      negz: "img/k_scene 41/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 40", 
      back:  null,
      top:   null,
      bottom:null,
      right: null,
      left:  null
    }
  },
 "k_scene 42": {
    textures: {
      posx: "img/k_scene 42/posx.jpg",
      negx: "img/k_scene 42/negx.jpg",
      posy: "img/k_scene 42/posy.jpg",
      negy: "img/k_scene 42/negy.jpg",
      posz: "img/k_scene 42/posz.jpg",
      negz: "img/k_scene 42/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 43",
      left:  "k_scene 40"
    }
  },
 "k_scene 43": {
    textures: {
      posx: "img/k_scene 43/posx.jpg",
      negx: "img/k_scene 43/negx.jpg",
      posy: "img/k_scene 43/posy.jpg",
      negy: "img/k_scene 43/negy.jpg",
      posz: "img/k_scene 43/posz.jpg",
      negz: "img/k_scene 43/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 45", 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 44",
      left:  "k_scene 42"
    }
  },
 "k_scene 44": {
    textures: {
      posx: "img/k_scene 44/posx.jpg",
      negx: "img/k_scene 44/negx.jpg",
      posy: "img/k_scene 44/posy.jpg",
      negy: "img/k_scene 44/negy.jpg",
      posz: "img/k_scene 44/posz.jpg",
      negz: "img/k_scene 44/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: null,
      left:  "k_scene 43"
    }
  },
 "k_scene 45": {
    textures: {
      posx: "img/k_scene 45/posx.jpg",
      negx: "img/k_scene 45/negx.jpg",
      posy: "img/k_scene 45/posy.jpg",
      negy: "img/k_scene 45/negy.jpg",
      posz: "img/k_scene 45/posz.jpg",
      negz: "img/k_scene 45/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 46", 
      back:  "k_scene 43",
      top:   null,
      bottom:null,
      right: null,
      left:  null
    }
  },
 "k_scene 46": {
    textures: {
      posx: "img/k_scene 46/posx.jpg",
      negx: "img/k_scene 46/negx.jpg",
      posy: "img/k_scene 46/posy.jpg",
      negy: "img/k_scene 46/negy.jpg",
      posz: "img/k_scene 46/posz.jpg",
      negz: "img/k_scene 46/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  "k_scene 47",
      top:   null,
      bottom:null,
      right: "k_scene 49",
      left:  null
    }
  },
 "k_scene 47": {
    textures: {
      posx: "img/k_scene 47/posx.jpg",
      negx: "img/k_scene 47/negx.jpg",
      posy: "img/k_scene 47/posy.jpg",
      negy: "img/k_scene 47/negy.jpg",
      posz: "img/k_scene 47/posz.jpg",
      negz: "img/k_scene 47/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 46", 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 48",
      left:  null
    }
  },
 "k_scene 48": {
    textures: {
      posx: "img/k_scene 48/posx.jpg",
      negx: "img/k_scene 48/negx.jpg",
      posy: "img/k_scene 48/posy.jpg",
      negy: "img/k_scene 48/negy.jpg",
      posz: "img/k_scene 48/posz.jpg",
      negz: "img/k_scene 48/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: null,
      left:  "k_scene 47"
    }
  },
 "k_scene 49": {
    textures: {
      posx: "img/k_scene 49/posx.jpg",
      negx: "img/k_scene 49/negx.jpg",
      posy: "img/k_scene 49/posy.jpg",
      negy: "img/k_scene 49/negy.jpg",
      posz: "img/k_scene 49/posz.jpg",
      negz: "img/k_scene 49/negz.jpg" 
    },
    hotspots: {
      front: "k_scene 50", 
      back:  "k_scene 46",
      top:   null,
      bottom:null,
      right: null,
      left:  null
    }
  },
  "k_scene 50": {
    textures: {
      posx: "img/k_scene 50/posx.jpg",
      negx: "img/k_scene 50/negx.jpg",
      posy: "img/k_scene 50/posy.jpg",
      negy: "img/k_scene 50/negy.jpg",
      posz: "img/k_scene 50/posz.jpg",
      negz: "img/k_scene 50/negz.jpg" 
    },
    hotspots: {
      front: null, 
      back:  null,
      top:   null,
      bottom:null,
      right: "k_scene 49",
      left:  null
    }
  },

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



