export function createSlider(containerId, data) {
  const container = document.getElementById(containerId);

  const section = document.createElement('section');
  section.className = 'slider-container';

  const sliderDiv = document.createElement('div');
  sliderDiv.className = 'slider-images';

  data.forEach((item, index) => {
    const slide = document.createElement('div');
    slide.className = 'slider-img';
    if (index === 3) slide.classList.add('active');

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;

    const h1 = document.createElement('h1');
    h1.textContent = item.name;

    const details = document.createElement('div');
    details.className = 'details';

    const h2 = document.createElement('h2');
    h2.textContent = item.name;

    const p = document.createElement('p');
    p.textContent = item.role;

    details.appendChild(h2);
    details.appendChild(p);

    slide.appendChild(img);
    slide.appendChild(h1);
    slide.appendChild(details);

    sliderDiv.appendChild(slide);
  });

  section.appendChild(sliderDiv);
  container.appendChild(section);

  jQuery(document).ready(function ($) {
    $(".slider-img").on("click", function () {
      $(".slider-img").removeClass("active");
      $(this).addClass("active");
    });
  });
}
