const Plant = (plant) => {
  const isStaffFavorite = plant.staff_favorite ? 'is-staff-favorite' : '';
  const li = `<li class="plant__item ${isStaffFavorite}">
      ${
        plant.staff_favorite
          ? '<span class="plant__flag">✨ Staff favorite</span>'
          : ''
      }
      <img class="plant__image" src="${plant.url}">
      <div class="plant__details">
        <div class="plant__left">
          <h3 class="plant__name">${plant.name}</h3>
        </div>
        <div class="plant__right">
          <span class="plant__price">$${plant.price}</span>
          <span class="plant__details-icons">
            <i class="icon icon-toxicity-${plant.toxicity}"></i>
            <i class="icon icon-sun-${plant.sun}"></i>
            <i class="icon icon-water-${plant.water}"></i>
          </span>
        </div>
      </div>
    </li>
  `;

  return li;
};

export default Plant;
