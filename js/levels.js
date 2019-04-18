const levels = [
  {
    currentLevel: 1,
    height: 1000, 
    width: 1400,
    startPos: { x: 50, y: 500 },
    platforms: [
      {
        pos: { x: 0, y: 800 },
        height: 30, 
        width: 600,
        type: 'platform'
      },
      {
        pos: { x: 200, y: 750 },
        height: 15,
        width: 15,
        id: 1,
        type: 'collectible'
      },
      {
        pos: { x: 300, y: 750 },
        height: 15,
        width: 15,
        id: 2,
        type: 'collectible'
      },
      {
        pos: { x: 400, y: 750 },
        height: 15,
        width: 15,
        id: 3,
        type: 'collectible'
      },
      {
        pos: { x: 500, y: 750 },
        height: 15,
        width: 15,
        id: 4,
        type: 'collectible'
      },
      {
        pos: { x: 800, y: 800 },
        height: 30, 
        width: 600,
        type: 'platform'
      },
      {
        pos: { x: 900, y: 750 },
        height: 15,
        width: 15,
        id: 5,
        type: 'collectible'
      },
      {
        pos: { x: 1000, y: 750 },
        height: 15,
        width: 15,
        id: 6,
        type: 'collectible'  
      },
      {
        pos: { x: 1100, y: 750 },
        height: 15,
        width: 15,
        id: 7,
        type: 'collectible'
      },
      {
        pos: { x: 1200, y: 750 },
        height: 15,
        width: 15,
        id: 8,
        type: 'collectible'
      },
      // this.pos.x, this.pos.y, this.radius
      {
        pos: { x: 1300, y: 730},
        height: 40,
        width: 40,
        type: 'goal'
      }
      // {
      //   pos: { x: 1300, y: 700 },
      //   height: 80, 
      //   width: 50,
      //   type: 'goal',
      // },
    ],
  },
  {
    currentLevel: 2,
    height: 1000, 
    width: 1400,
    startPos: { x: 50, y: 500 },
    platforms: [
      {
        pos: { x: 0, y: 800 },
        height: 30, 
        width: 400,
        type: 'platform'
      },
      {
        pos: { x: 200, y: 750 },
        height: 15,
        width: 15,
        id: 1,
        type: 'collectible'
      },
      {
        pos: { x: 300, y: 750 },
        height: 15,
        width: 15,
        id: 2,
        type: 'collectible'
      },
      {
        pos: { x: 500, y: 700 },
        height: 30, 
        width: 400,
        type: 'platform'
      },
      {
        pos: { x: 600, y: 650 },
        height: 15,
        width: 15,
        id: 3,
        type: 'collectible'
      },
      {
        pos: { x: 700, y: 650 },
        height: 15,
        width: 15,
        id: 4,
        type: 'collectible'
      },
      {
        pos: { x: 800, y: 650 },
        height: 15,
        width: 15,
        id: 5,
        type: 'collectible'
      },
      {
        pos: { x: 1000, y: 600 },
        height: 30, 
        width: 400,
        type: 'platform'
      },
      {
        pos: { x: 1100, y: 550 },
        height: 15,
        width: 15,
        id: 6,
        type: 'collectible'
      },
      {
        pos: { x: 1200, y: 550 },
        height: 15,
        width: 15,
        id: 7,
        type: 'collectible'
      },
      {
        pos: { x: 1300, y: 530},
        height: 40,
        width: 40,
        type: 'goal'
      }
    ],
  },
  {
    currentLevel: 3,
    height: 1000, 
    width: 1400,
    startPos: { x: 200, y: 750 },
    platforms: [
      {
        pos: { x: 150, y: 800 },
        height: 30, 
        width: 400,
        type: 'platform'
      },
      {
        pos: { x: 350, y: 750 },
        height: 15,
        width: 15,
        id: 1,
        type: 'collectible'
      },
      {
        pos: { x: 450, y: 750 },
        height: 15,
        width: 15,
        id: 2,
        type: 'collectible'
      },
      {
        pos: { x: 700, y: 650 },
        height: 30, 
        width: 400,
        type: 'platform'
      },
      {
        pos: { x: 800, y: 600 },
        height: 15,
        width: 15,
        id: 3,
        type: 'collectible'
      },
      {
        pos: { x: 900, y: 600 },
        height: 15,
        width: 15,
        id: 4,
        type: 'collectible'
      },
      {
        pos: { x: 1000, y: 600 },
        height: 15,
        width: 15,
        id: 5,
        type: 'collectible'
      },
      {
        pos: { x: 150, y: 500 },
        height: 30, 
        width: 400,
        type: 'platform'
      },
      {
        pos: { x: 250, y: 450 },
        height: 15,
        width: 15,
        id: 6,
        type: 'collectible'
      },
      {
        pos: { x: 350, y: 450 },
        height: 15,
        width: 15,
        id: 7,
        type: 'collectible'
      },
      {
        pos: { x: 450, y: 450 },
        height: 15,
        width: 15,
        id: 8,
        type: 'collectible'
      },
      {
        pos: { x: 700, y: 350 },
        height: 30, 
        width: 400,
        type: 'platform'
      },
      {
        pos: { x: 800, y: 300 },
        height: 15,
        width: 15,
        id: 9,
        type: 'collectible'
      },
      {
        pos: { x: 900, y: 300 },
        height: 15,
        width: 15,
        id: 10,
        type: 'collectible'
      },
      {
        pos: { x: 1000, y: 300 },
        height: 15,
        width: 15,
        id: 11,
        type: 'collectible'
      },
      {
        pos: { x: 400, y: 180},
        height: 40,
        width: 40,
        type: 'goal'
      },
    ],
  },
  {
    currentLevel: 4,
    height: 1000, 
    width: 1400,
    startPos: { x: 50, y: 0 },
    platforms: [
      {
        pos: { x: 0, y: 200 },
        height: 30, 
        width: 900,
        type: 'platform'
      },
      {
        pos: { x: 200, y: 150 },
        height: 15,
        width: 15,
        id: 1,
        type: 'collectible'
      },
      {
        pos: { x: 300, y: 150 },
        height: 15,
        width: 15,
        id: 2,
        type: 'collectible'
      },
      {
        pos: { x: 400, y: 150 },
        height: 15,
        width: 15,
        id: 3,
        type: 'collectible'
      },
      {
        pos: { x: 500, y: 150 },
        height: 15,
        width: 15,
        id: 4,
        type: 'collectible'
      },
      {
        pos: { x: 600, y: 150 },
        height: 15,
        width: 15,
        id: 5,
        type: 'collectible'
      },
      {
        pos: { x: 700, y: 150 },
        height: 15,
        width: 15,
        id: 6,
        type: 'collectible'
      },
      {
        pos: { x: 800, y: 150 },
        height: 15,
        width: 15,
        id: 7,
        type: 'collectible'
      },
      {
        pos: { x: 1000, y: 200 },
        height: 30, 
        width: 400,
        type: 'platform'
      },

      {
        pos: { x: 1100, y: 150 },
        height: 15,
        width: 15,
        id: 8,
        type: 'collectible'
      },
      {
        pos: { x: 1200, y: 150 },
        height: 15,
        width: 15,
        id: 9,
        type: 'collectible'
      },
      {
        pos: { x: 1300, y: 150 },
        height: 15,
        width: 15,
        id: 10,
        type: 'collectible'
      },
      {
        pos: { x: 100, y: 550 },
        height: 30, 
        width: 1300,
        type: 'platform'
      },
      {
        pos: { x: 200, y: 500 },
        height: 15,
        width: 15,
        id: 11,
        type: 'collectible'
      },
      {
        pos: { x: 300, y: 500 },
        height: 15,
        width: 15,
        id: 12,
        type: 'collectible'
      },
      {
        pos: { x: 400, y: 500 },
        height: 15,
        width: 15,
        id: 13,
        type: 'collectible'
      },
      {
        pos: { x: 500, y: 500 },
        height: 15,
        width: 15,
        id: 14,
        type: 'collectible'
      },
      {
        pos: { x: 600, y: 500 },
        height: 15,
        width: 15,
        id: 15,
        type: 'collectible'
      },
      {
        pos: { x: 700, y: 500 },
        height: 15,
        width: 15,
        id: 16,
        type: 'collectible'
      },
      {
        pos: { x: 800, y: 500 },
        height: 15,
        width: 15,
        id: 17,
        type: 'collectible'
      },
      {
        pos: { x: 900, y: 500 },
        height: 15,
        width: 15,
        id: 18,
        type: 'collectible'
      },
      {
        pos: { x: 1000, y: 500 },
        height: 15,
        width: 15,
        id: 19,
        type: 'collectible'
      },
      {
        pos: { x: 1100, y: 500 },
        height: 15,
        width: 15,
        id: 20,
        type: 'collectible'
      },
      {
        pos: { x: 1200, y: 500 },
        height: 15,
        width: 15,
        id: 21,
        type: 'collectible'
      },
      {
        pos: { x: 1300, y: 500 },
        height: 15,
        width: 15,
        id: 22,
        type: 'collectible'
      },
      {
        pos: { x: 0, y: 900 },
        height: 30, 
        width: 150,
        type: 'platform'
      },
      {
        pos: { x: 75, y: 850 },
        height: 15,
        width: 15,
        id: 23,
        type: 'collectible'
      },
      {
        pos: { x: 250, y: 900 },
        height: 30, 
        width: 150,
        type: 'platform'
      },
      {
        pos: { x: 325, y: 850 },
        height: 15,
        width: 15,
        id: 24,
        type: 'collectible'
      },
      {
        pos: { x: 500, y: 900 },
        height: 30, 
        width: 150,
        type: 'platform'
      },
      {
        pos: { x: 575, y: 850 },
        height: 15,
        width: 15,
        id: 25,
        type: 'collectible'
      },
      {
        pos: { x: 750, y: 900 },
        height: 30, 
        width: 150,
        type: 'platform'
      },
      {
        pos: { x: 825, y: 850 },
        height: 15,
        width: 15,
        id: 26,
        type: 'collectible'
      },
      {
        pos: { x: 1000, y: 900 },
        height: 30, 
        width: 150,
        type: 'platform'
      },
      {
        pos: { x: 1075, y: 850 },
        height: 15,
        width: 15,
        id: 27,
        type: 'collectible'
      },
      {
        pos: { x: 1250, y: 900 },
        height: 30, 
        width: 150,
        type: 'platform'
      },
      {
        pos: { x: 1300, y: 830},
        height: 40,
        width: 40,
        type: 'goal'
      },
    ],
  }
];