

function myFunction(count) {
    return `Eae manooow ${count}`;
}

export default {
    name: 'HelloWorld',
    data: () {
        return {
            msg: "",
            count: 0
        },
            methods: {
            ola() {
                const greetings = myFunction(count);
                this.msg = greetings;
                count++;
            }
        }
    }
}

export { myFunction }