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

    getTitle(){
        return this.title;
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
    clone(){
        const another  = new BookShelf();
        this.shelf.forEach((e,i)=>{
            another.addBook(new Book(e.getAutor(),e.getTitle()));
        });

        return another;
    }
}


const bookShelf = new BookShelf();

bookShelf.addBook(new Book("lee", "자료구조"));
bookShelf.addBook(new Book("kim", "c언어"));
bookShelf.addBook(new Book("park", "자바"));
console.log(bookShelf.getShelf()[0].getAutor());
const tmpBookShelf = Object.create(bookShelf);// 프로토타입으로 인스턴스를 복사를 한다.
console.log(`첫번째 복사방식 ${tmpBookShelf}`);
const secondBookShelf = bookShelf.clone();
console.log(`두번째 복사방식 ${secondBookShelf}`);

