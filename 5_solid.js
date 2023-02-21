/* SOLID principle to write javaScript code */

/* S — Single responsibility principle
O — Open closed principle
L — Liskov substitution principle
I — Interface segregation principle
D — Dependency Inversion principle */


// S — Single responsibility principle =>

class TodoList {
    constructor() {
        this.items = []
    }

    addItem(text) {
        this.items.push(text)
    }

    removeItem(index) {
        this.items = items.splice(index, 1)
    }

    toString() {
        return this.items.toString()
    }
}

class DatabaseManager {
    saveToFile(data, filename) {
        fs.writeFileSync(filename, data.toString())
    }

    loadFromFile(filename) {
        // Some implementation
    }
}

// O — Open closed principle =>

const filterByProp = (array, propName, value) =>
    array.filter(element => element[propName] === value)


// L — Liskov substitution principle =>

class Square extends Rectangle {
    constructor(size) {
        super(size, size)
    }

    set width(value) {
        this._width = this._height = value
    }

    set height(value) {
        this._width = this._height = value
    }
}

// I — Interface segregation principle =>

class IPhone extends Phone {
    call(number) {
        // Implementation
    }

    takePhoto() {
        // Implementation
    }

    connectToWifi() {
        // Implementation
    }
}

// D — Dependency Inversion principle =>

class FileSystem {
    save(data) {
        // Implementation
    }
}

class ExternalDB {
    save(data) {
        // Implementation
    }
}

class LocalPersistance {
    save(data) {
        // Implementation
    }
}

class PersistanceManager {
    saveData(db, data) {
        db.save(data)
    }
}

// The value of SOLID principles is not obvious. But if you ask yourself "Am I violating SOLID principles" when you design your architecture, I promise that the quality and scalability of your code will be much better.