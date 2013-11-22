
function loadJSON(userName, projectId) {
	$.getJSON("retrieveVisualEditor.php"), {userName: userName, projectId: projectId},
	function(data) {
		if (data.hasOwnProperty("error")) {
			console.log("error");
		} else {
			return data.jstext;
		}
	}
}

function syncJSON(userName, projectId, jsonText)
$.getJSON("updateVisualEditor.php", {userName: userName, projectId: projectId, json: jsonText}, 
	fuction(data) {
		alert(data.jstext);
		myJson = data.jstext;
	});