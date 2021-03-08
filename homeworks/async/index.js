const WEATHER_URL = 'http://api.weatherstack.com/current'
const ACCESS_KEY = '78f402e7550e95690b76630876a2a351'
const INFO_FIELDS = [
  'temperature',
  'cloudcover',
  'observation_time',
  'wind_dir',
  'wind_speed',
  'wind_degree',
]

function clearData() {
  const [listGroup] = document.getElementsByClassName('list-group')
  listGroup.innerHTML = ''
}

function createLI(key, value, liClass) {
  const li = document.createElement('li')
  li.classList.add(liClass)
  li.innerText = `${key}: ${value}`
  return li
}

function renderData(data) {
  const [listGroup] = document.getElementsByClassName('list-group')

  INFO_FIELDS.forEach(
    (field) => {
      const li = createLI(field, data[field], 'list-group-item')
      listGroup.appendChild(li)
    },
  )
}

async function getWeather(city, country) {
  const url = new URL(WEATHER_URL)
  const query = [city, country].filter((el) => el).join(',')

  url.search = new URLSearchParams({ access_key: ACCESS_KEY, query })

  const rawData = await fetch(url)
  const data = await rawData.json()

  clearData()
  renderData(data.current)
}

function submitForm(e) {
  const city = document.getElementById('city-input').value
  const country = document.getElementById('country-input').value

  getWeather(city, country)

  e.preventDefault()
}

function main() {
  document.getElementById('main-form').onsubmit = submitForm
}

main()
