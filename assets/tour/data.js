var APP_DATA = {
  "scenes": [
    {
      "id": "0-vstup",
      "name": "Vstup",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2419758247929735,
          "pitch": 0.620072567297111,
          "rotation": 0,
          "target": "1-atna"
        },
        {
          "yaw": 0.061435716928043504,
          "pitch": 0.7080045796860936,
          "rotation": 0,
          "target": "2-chodba"
        },
        {
          "yaw": -1.4334253691410872,
          "pitch": 0.8966464264857041,
          "rotation": 0,
          "target": "3-wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-atna",
      "name": "Šatna",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9224277659564724,
          "pitch": 0.7061226113672632,
          "rotation": 0,
          "target": "0-vstup"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-chodba",
      "name": "Chodba",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1234225443026826,
          "pitch": 0.8926159356167158,
          "rotation": 0,
          "target": "0-vstup"
        },
        {
          "yaw": -1.1613542381949173,
          "pitch": 0.6958861162187766,
          "rotation": 0,
          "target": "4-koupelna"
        },
        {
          "yaw": 0.014733284225560084,
          "pitch": 0.5515737563649559,
          "rotation": 0,
          "target": "5-lonice---vstup"
        },
        {
          "yaw": 0.5727364131973474,
          "pitch": 0.5878204147443764,
          "rotation": 0,
          "target": "7-kuchyn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wc",
      "name": "WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.0019698716948717276,
        "pitch": 0.6063979337875622,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 3.089009809563713,
          "pitch": 0.8194630666124016,
          "rotation": 0,
          "target": "0-vstup"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-koupelna",
      "name": "Koupelna",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7129047919994242,
          "pitch": 0.6795191150317219,
          "rotation": 0,
          "target": "2-chodba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lonice---vstup",
      "name": "Ložnice - Vstup",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0726481386181996,
          "pitch": 0.7089216437863239,
          "rotation": 0,
          "target": "2-chodba"
        },
        {
          "yaw": -0.02969338778791908,
          "pitch": 0.37274939554854924,
          "rotation": 0,
          "target": "6-lonice---okno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-lonice---okno",
      "name": "Ložnice - Okno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6049456544548768,
          "pitch": 0.4629221436498554,
          "rotation": 0,
          "target": "5-lonice---vstup"
        },
        {
          "yaw": -1.6303358189608925,
          "pitch": 0.28538514004482884,
          "rotation": 0,
          "target": "2-chodba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kuchyn",
      "name": "Kuchyně",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5997134341559551,
          "pitch": 0.33681526890488556,
          "rotation": 0,
          "target": "8-obvk"
        },
        {
          "yaw": -3.132673911454809,
          "pitch": 0.5815635638285155,
          "rotation": 0,
          "target": "2-chodba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-obvk",
      "name": "Obývák",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8054805430241228,
          "pitch": 0.3775754071757689,
          "rotation": 0,
          "target": "7-kuchyn"
        },
        {
          "yaw": -2.640715836903693,
          "pitch": 0.25556455194744565,
          "rotation": 0,
          "target": "2-chodba"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "2KK_VR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
