document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    for (let i = 0; i < 10; i++) {
        const bookRow = document.createElement('div');
        bookRow.className = 'book-row';

        for (let j = 0; j < 3; j++) {
            const book = document.createElement('div');
            book.className = 'book';
            const img = document.createElement('img');
            img.src = `book${(i * 3) + j + 1}.jpg`;
            img.alt = `Book ${(i * 3) + j + 1}`;
            book.appendChild(img);
            bookRow.appendChild(book);
        }

        container.appendChild(bookRow);
    }
});
