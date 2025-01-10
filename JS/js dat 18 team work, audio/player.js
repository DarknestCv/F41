const player = {
    hp:100,
    hpObserver: new Observer(),
    updateHp(value) {
        this.hp = value
        this.hpObserver.broadcast() 
    }
}