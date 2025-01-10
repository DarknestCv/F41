class Observer{

    constructor(){
        this.subscribers = [] // ! масив куди записуються ті хто підписаний
    }

    broadcast(...data){
        this.subscribers.forEach(cb => cb(...data))  // ! виклик
    }

    subscribe(){
        this.subscribe.push(this.subscribers); // ! підписка
    }

    unscribe(callback){
        this.subscribers = this.subscribers // ! відписка 
            .filter(cb => cb !== callback)
    }
}