const height = window.innerHeight;
const width = window.innerWidth;

export const canvas1 = document.getElementById('canvas');
canvas1.setAttribute('width', width);
canvas1.setAttribute('height', height);

export const canvas = {
  width: width,
  height: height,
};

export const ctx = canvas1.getContext('2d');

