const createElement = day => {
    let days = document.createElement('section')
    days.setAttribute('class', 'habit__days')
    days.innerHTML =`<h1 id="day_name">Day ${day}</h1>
                    <div class="day">
                        <input type="checkbox">
                        <input type="checkbox">
                        <input type="checkbox">
                        <input type="checkbox">
                        <input type="checkbox">
                        <input type="checkbox">
                    </div>`
    return days
}

let habit = document.querySelector('.habit')

for(let i=1; i<=31; i++) {
   habit.appendChild(createElement(i))
}