// import "./styles.css";
let width,
  height,
  materialParts="concrete",
  installPart="wall"


// create width and height where customer choose their curtain according his/her demand
const widthLookup = [
  {
    start: 0,
    end: 10,
    price: 10
  },
  {
    start: 11,
    end: 20,
    price: 15
  },
  {
    start: 21,
    end: 30,
    price: 16
  }
];

const heightLookup = [
  {
    start: 0,
    end: 10,
    price: 12
  },
  {
    start: 11,
    end: 20,
    price: 15
  },
  {
    start: 21,
    end: 30,
    price: 17
  }
];

const materialPartsLookup={
    "timber":20,
    "concrete":40,
    "aluminum":50,
    "plaster":60,
    "metal":70
}

const installPartLookup ={
    "ceil":20,
    "wall":15
}

document.getElementById("width").addEventListener("keyup", (e) => {
  width = parseInt(e.target.value, 10);
});

document.getElementById("height").addEventListener("keyup", (e) => {
  height = parseInt(e.target.value, 10);
});



document.getElementById("materialParts").addEventListener("change", (e) => {
    materialParts = e.target.value;
});

document.getElementById("installPart").addEventListener("change", (e) => {
    installPart = e.target.value;
});

function calculatePrice( width, height,materialParts,installPart) {
  const materialPrice = materialPartsLookup[materialParts]
  const installPrice = installPartLookup[installPart]

  const wPrice = widthLookup.reduce(
    (acc, w) => {
      if (width >= w.start && width <= w.end) acc = w.price;
      return acc;
    },
    [0]
  );
  const hPrice = heightLookup.reduce(
    (acc, h) => {
      if (height >= h.start && height <= h.end) acc = h.price;
      return acc;
    },
    [0]
  );
  return wPrice * hPrice * materialPrice *installPrice ;
}

document.getElementById("submitBtn").addEventListener("click", (e) => {
  console.log("you chosse this", width, height,materialParts,installPart);
  let total = 0;
  total = calculatePrice( width, height,materialParts,installPart);

  document.getElementById("total").value = total;
});
