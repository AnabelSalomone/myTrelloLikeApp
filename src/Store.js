export const Store = {
	datas: {
		taches: [
			{
				titre: "Call someone",
				note: 8,
				heures: 3,
				important: true
			},
			{
				titre: "Do something",
				note: 6,
				heures: 1,
				important: false
			},
			{
				titre: "Finish something",
				note: 3,
				heures: 4,
				important: true
			},
			{
				titre: "Start something new",
				note: 6,
				heures: 1,
				important: false
			},
			{
				titre: "Faire lmn 5",
				note: 9,
				heures: 7,
				important: false
			}
		],
		tachesSup: 0,
		newTask: false,
		word: ''
	},
	search() {
		let tab = [];
		let reg = new RegExp(this.datas.word, "i");

		if (this.datas.word.length >= 3) {
			tab = this.datas.taches.filter((elt) => reg.test(elt.titre));
		} else {
			tab = this.datas.taches;
		}

		console.log(tab)

		return tab;

	}
};