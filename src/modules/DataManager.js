// This file is in charge of all interactions with the database.

export default {

	dataManager(fetchObject) {

		let databaseURL = "http://bangazon.com/api";
		let dataSet = fetchObject.dataSet;
		// let embedItem = fetchObject.embedItem;
		let fetchType = fetchObject.fetchType;
		let databaseObject = fetchObject.databaseObject;
		let specificId = fetchObject.specificId;

		switch (fetchType) {

			case "GET-ALL":
				return fetch(`${databaseURL}/${dataSet}`, {
                    method: 'GET',
                    mode: 'cors',
					headers: {"Content-Type": "application/json; charset=utf-8"}
                })
				.then(r => r.json())

			case "GET":
				return fetch(`${databaseURL}/${dataSet}/${specificId}`, {
                    method: `${fetchType}`,
                    mode: 'cors',
					headers: {"Content-Type": "application/json; charset=utf-8"}
                })
				.then(r => r.json())

			case "POST":
				return fetch(`${databaseURL}/${dataSet}`, {
					method: `${fetchType}`,
					headers: {"Content-Type": "application/json; charset=utf-8"},
					body: JSON.stringify(databaseObject)
				})
				.then(r => r.json())

			case "PUT":
				return fetch(`${databaseURL}/${dataSet}/${specificId}`, {
					method: `${fetchType}`,
					headers: {"Content-Type": "application/json; charset=utf-8"},
					body: JSON.stringify(databaseObject)
				})
				.then(r => r.json())

			case "DELETE":
				return fetch(`${databaseURL}/${dataSet}/${specificId}`, {
					method: `${fetchType}`
				})
				.then(r => r.json())

			default: break;
		}
	}
}
