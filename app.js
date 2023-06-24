const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


const products = [
  {
    id: 1,
    title: "Air Max",
    price: 119,
    colors: [
      {
        code: "white",
        img: "image/air-max.png",
      },
      {
        code: "black",
        img: "image/air-max2.png",
      },
      {
        code: "red",
        img: "image/air-max3.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "white",
        img: "image/air-jordan.png",
      },
      {
        code: "lightgrey",
        img: "image/air-jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "white",
        img: "image/blazer.png",
      },
      {
        code: "orange",
        img: "image/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Zoom",
    price: 129,
    colors: [
      {
        code: "black",
        img: "image/zoom.png",
      },
      {
        code: "white",
        img: "image/zoom2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Slipper",
    price: 99,
    colors: [
      {
        code: "white",
        img: "image/slipper.png",
      },
      {
        code: "black",
        img: "image/slipper2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "gray";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

const cartIcon = document.querySelector(".cartIcon");
const cartDetail = document.querySelector(".cartDetail");
const closed = document.querySelector(".closed");

cartIcon.addEventListener("click", () => {
  cartDetail.style.display = "flex";
});

closed.addEventListener("click", () => {
  cartDetail.style.display = "none";
});

const shopChat = document.querySelector(".shopChat");
const chatDetail = document.querySelector(".chatDetail");
const closed2 = document.querySelector(".closed2");

shopChat.addEventListener("click", () => {
  chatDetail.style.display ="flex";
});

closed2.addEventListener("click", () => {
  chatDetail.style.display = "none";
});

const help_icon = document.querySelector(".help_icon");
const user_help = document.querySelector(".user_help");
const closed3 = document.querySelector(".closed3");

help_icon.addEventListener("click", () => {
  user_help.style.display = "flex";
});

closed3.addEventListener("click", () => {
  user_help.style.display = "none";
});

const user_icon = document.querySelector(".user_icon");
const user_side = document.querySelector(".user_side");
const closed4 = document.querySelector(".closed4");

user_icon.addEventListener("click", () => {
  user_side.style.display = "flex";
});

closed4.addEventListener("click", () => {
  user_side.style.display = "none";
});

const menu_icon = document.querySelector(".menu_icon");
const sidebar = document.querySelector(".sidebar");
const closed5 = document.querySelector("#closed5");

let isSidebarOpen = false; // Thêm biến để theo dõi trạng thái mở/closed của sidebar

menu_icon.addEventListener("click", () => {
  if (isSidebarOpen) {
    sidebar.style.display = "none"; // Đóng sidebar nếu nó đang mở
    isSidebarOpen = false;
  } else {
    sidebar.style.display = "block"; // Mở sidebar nếu nó đang đóng
    isSidebarOpen = true;
  }
});

closed5.addEventListener("click", () => {
  sidebar.style.display = "none";
  isSidebarOpen = false; // Đặt trạng thái sidebar thành closed khi nhấp vào closed5
});

function redirectToSelectedPage(selectElement) {
  var selectedOption = selectElement.options[selectElement.selectedIndex];
  var url = selectedOption.value;
  window.location.href = url;
}

const nextIcon = document.querySelector(".nextIcon");
const backIcon = document.querySelector(".backIcon");
const product = document.querySelector(".product");




