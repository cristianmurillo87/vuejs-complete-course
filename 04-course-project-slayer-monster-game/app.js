function getRandomValue(minDamage, maxDamage) {
  return Math.floor(Math.random() * (maxDamage - minDamage)) + minDamage;
}

const app = Vue.createApp({
  data: function () {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      isDraw: false,
      playerWon: false,
      monsterWon: false,
      isGameOver: false,
      // [{attacker: 'player' | 'monster', action: 'damage' | 'heal', health}]
      battleLog: []
    };
  },
  watch: {
    playerHealth: function (value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.isDraw = true;
      } else if (value <= 0) {
        this.monsterWon = true;
        this.playerWon = false;
      }
    },
    monsterHealth: function (value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.isDraw = true;
      } else if (value <= 0) {
        this.monsterWon = false;
        this.playerWon = true;
      }
    }
  },
  computed: {
    monsterHealthBar: function () {
      if (this.monsterHealth <= 0) return { width: "0%" };
      return { width: `${this.monsterHealth}%` };
    },
    playerHealthBar: function () {
      if (this.playerHealth <= 0) return { width: "0%" };
      return { width: `${this.playerHealth}%` };
    },
    specialAttackDisabled: function () {
      return this.currentRound % 3 !== 0;
    },
    gameOver: function () {
      return (
        this.isGameOver || this.playerHealth <= 0 || this.monsterHealth <= 0
      );
    }
  },
  methods: {
    startGame: function () {
      this.isGameOver = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.battleLog = [];
    },
    attackMonster: function () {
      this.currentRound += 1;
      const damage = getRandomValue(5, 12);
      this.monsterHealth -= damage;
      this.addLogMessage("player", "attack", damage);
      this.attackPlayer();
    },
    attackPlayer: function () {
      const damage = getRandomValue(8, 15);
      this.playerHealth -= damage;
      this.addLogMessage("monster", "attack", damage);
    },
    specialAttackMonster: function () {
      this.currentRound += 1;
      const damage = getRandomValue(10, 25);
      this.monsterHealth -= damage;
      this.addLogMessage("player", "attack", damage);
      this.attackPlayer();
    },
    healPlayer: function () {
      this.currentRound += 1;
      const health = getRandomValue(8, 30);
      if (this.playerHealth + health > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += health;
      }
      this.addLogMessage("player", "heal", health);
      this.attackPlayer();
    },
    surrender: function () {
      if (this.isGameOver) return;
      this.isGameOver = true;
      this.playerWon = false;
      this.monsterWon = true;
    },
    addLogMessage: function (attacker, action, value) {
      this.battleLog.unshift({ attacker, action, value });
    }
  }
});

app.mount("#game");
