class Book {
    autor;
    title;
    
    constructor(autor,title){
        this.autor = autor;
        this.title = title;
    }

    setAutor(autor){
        this.autor = autor;
    }

    getAutor(){
        return this.autor;
    }

    toString(){
        return `(${this.autor}  ${this.title})`;
    }
};

class BookShelf {
    shelf;

    constructor(){
        this.shelf = [];
    }

    addBook (book){
        this.shelf.push(book);
    }

    getShelf(){
        return this.shelf;
    }

    setShelf(shelf){
        this.shelf = shelf;
    }

    toString(){
        return this.shelf.toString();
    }
}

const bookShelf = new BookShelf();
bookShelf.addBook(new Book("lee", "자료구조"));
bookShelf.addBook(new Book("kim", "c언어"));
bookShelf.addBook(new Book("park", "자바"));

const tmpBookShelf = Object.create(bookShelf);// 프로토타입으로 인스턴스를 복사를 한다.

tmpBookShelf.setShelf([]);
tmpBookShelf.addBook(new Book('json','crazy'));
console.log(`복제전 ${tmpBookShelf.toString()},복제${bookShelf.toString()}`);
