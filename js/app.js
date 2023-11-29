'use strict';

const menuBtn = document.querySelector('.menu-open');
const closeBtn = document.querySelector('.menu-close');
const menuItems = document.querySelector('.menu-items');
const cookies = document.querySelector('.cookies');
const acceptBtn = document.querySelector('.cookies-accept');
const declineBtn = document.querySelector('.cookies-decline');

menuBtn.addEventListener('click', () => {
    menuItems.classList.toggle('hideme');
    menuBtn.classList.toggle('hideme');
    closeBtn.classList.toggle('hideme');
});

closeBtn.addEventListener('click', () => {
    menuItems.classList.toggle('hideme');
    menuBtn.classList.toggle('hideme');
    closeBtn.classList.toggle('hideme');
});

acceptBtn.addEventListener('click', () => {
    cookies.classList.toggle('hideme');
});

declineBtn.addEventListener('click', () => {
    cookies.classList.toggle('hideme');
});