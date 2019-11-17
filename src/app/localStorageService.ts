

export class LocalStorageService<T> {
    constructor(private key: string) {

    }

    saveItemsToLocalStorage(items: Array<T> | T) {
        const savedContacts = localStorage.setItem(this.key, JSON.stringify(items));
        console.log('from saveItemsToLocalStorage savedContacts: ', savedContacts);
        return savedContacts;
    }
    getItemsFromLocalStorage(key?: string) {
        let savedItems;
        if (key != null) {
            const items = null;
            savedItems = JSON.parse(localStorage.getItem(key));
            console.log('from getTiemsFromLocalStorage key: ', key, 'savedIems: ', savedItems);
        } else {
            savedItems = JSON.parse(localStorage.getItem(this.key));

        }
        return savedItems;
    }

    clearItemFromLocalStorage(key?: string) {
        if (key != null) {
            const items = null;
            localStorage.setItem(key, JSON.stringify(items));
        } else {
            localStorage.clear();
        }
    }
}
