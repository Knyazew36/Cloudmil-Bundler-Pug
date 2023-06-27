
export const header = () => {
  console.info('asdf')
  const burger = document.querySelector('.header__burger')
  const navigation = document.querySelector('.navigation')
  burger.addEventListener('click', () => {
    burger.classList.toggle('--active')
    navigation.classList.toggle('--active')
    document.querySelector('body').classList.toggle('--scroll-hidden')
  })
}