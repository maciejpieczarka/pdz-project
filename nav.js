const selectElement = element => {
    return document.querySelector(element);
};

const selectElementAll = element => {
    return document.querySelectorAll(element);
};

//Open nav
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//Close nav
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

selectElementAll('.nav-item').forEach(navItem => {
    navItem.addEventListener('click', () => {
        selectElement('.nav-list').classList.remove('active');
    });
});

document.addEventListener('scroll', () => {
    selectElement('.nav-list').classList.remove('active');
});