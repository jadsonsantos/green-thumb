import Plant from '../components/Plant';

export default function initFetchPlants() {
  const plantsListEl = document.querySelector('[data-id="plant-list"]');
  const resultEl = document.querySelector('.s-result');
  const resultFoundEl = document.querySelector('.s-result-found');

  let selectedOptions = {};

  async function fetchPlants(url) {
    try {
      const plantsResponse = await fetch(url);
      const plantsJSON = await plantsResponse.json();
      plantsJSON.forEach((plant) => {
        const liPlant = Plant(plant);
        plantsListEl.insertAdjacentHTML('beforeend', liPlant);
        resultEl.classList.add('inactive');
        resultFoundEl.classList.add('active');
      });
    } catch (erro) {
      console.log(erro);
    }
  }

  function handleSunSelect() {
    const sunOptionsList = document.querySelectorAll(
      '[data-id="sun-option"] .option'
    );

    sunOptionsList.forEach((o) => {
      o.addEventListener('click', () => {
        const selectedOption = o
          .closest('.select-box')
          .querySelector('.selected')
          .getAttribute('value');

        setTimeout(() => {
          plantsListEl.innerHTML = '';
          selectedOptions.sun = selectedOption;
          console.log(selectedOptions);

          if (selectedOptions.water && selectedOptions.pet) {
            fetchPlants(
              `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${selectedOptions.sun}&water=${selectedOptions.water}&pets=${selectedOptions.pet}`
            );
          }
        }, 2000);
      });
    });
  }

  function handleWaterSelect() {
    const waterOptionsList = document.querySelectorAll(
      '[data-id="water-option"] .option'
    );

    waterOptionsList.forEach((o) => {
      o.addEventListener('click', () => {
        const selectedOption = o
          .closest('.select-box')
          .querySelector('.selected')
          .getAttribute('value');

        setTimeout(() => {
          plantsListEl.innerHTML = '';
          selectedOptions.water = selectedOption;
          console.log(selectedOptions);

          if (selectedOptions.sun && selectedOptions.pet) {
            fetchPlants(
              `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${selectedOptions.sun}&water=${selectedOptions.water}&pets=${selectedOptions.pet}`
            );
          }
        }, 2000);
      });
    });
  }

  function handlePetSelect() {
    const petOptionsList = document.querySelectorAll(
      '[data-id="pet-option"] .option'
    );

    petOptionsList.forEach((o) => {
      o.addEventListener('click', () => {
        const selectedOption = o
          .closest('.select-box')
          .querySelector('.selected')
          .getAttribute('value');

        setTimeout(() => {
          plantsListEl.innerHTML = '';
          selectedOptions.pet = selectedOption;
          console.log(selectedOptions);

          if (selectedOptions.water && selectedOptions.sun) {
            fetchPlants(
              `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${selectedOptions.sun}&water=${selectedOptions.water}&pets=${selectedOptions.pet}`
            );
          }
        }, 2000);
      });
    });
  }

  function handlePlantSelect() {
    handleSunSelect();
    handleWaterSelect();
    handlePetSelect();
  }

  handlePlantSelect();
}
