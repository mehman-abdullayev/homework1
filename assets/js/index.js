let characters = document.querySelectorAll('.characters'), character = document.getElementById('character'), enemies = document.getElementById('enemies'), selectCharacter = document.getElementById('select-character'), defender = document.getElementById('defender'), your_character = 0, enemy = 0;

for (let e of characters) {
	let p = document.createElement('p');
	p.innerText = Math.floor((Math.random() * 100) + 30).toString();
	e.append(p);
}

characters.forEach(e => e.addEventListener('click', event => {
	character.innerHTML = '';
	your_character = e.cloneNode(true);
	character.append(your_character);
	for (let e2 of characters) {
		if (e2 == e) continue;
		else {
			let e3 = e2.cloneNode(true);
			enemies.append(e3);
			e2.remove();
			e3.addEventListener('click', event1 => {
				enemy = e3.cloneNode(true);
				defender.innerHTML = '';
				defender.append(enemy);
			});
		}
	}
	e.remove();
	selectCharacter.style.display = 'none';
}));

function attack() {
	if (your_character != 0 && enemy != 0) {
		let health_point1 = Math.floor((Math.random() * 15) + 5), health_point2 = Math.floor((Math.random() * 15) + 5), your_health_point = parseInt(your_character.childNodes[5].innerText), enemy_health_point = parseInt(enemy.childNodes[5].innerText);
		your_health_point -= health_point1; enemy_health_point -= health_point2;
		if (your_health_point <= 0 || enemy_health_point <= 0) {
			let text = '';
			if (your_health_point <= 0) text = 'You lost!';
			else text = 'You win';
			if (confirm(text)) location.reload();
			else location.reload();
		}
		your_character.childNodes[5].innerText = your_health_point.toString();
		enemy.childNodes[5].innerText = enemy_health_point.toString();
	}
}