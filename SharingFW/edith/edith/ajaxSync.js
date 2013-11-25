
function loadJSON(userName, projectId) {
	$.getJSON("functions/retrieveVisualEditor.php"), {userName: "userName", projectId: "projectId"},
	function(data) {
		if (data.hasOwnProperty("error")) {
			console.log("error");
		} else {
			alert(data);
		}
	}
}

function syncJSON(userName, projectId, jsonText) {
$.getJSON("functions/updateVisualEditor.php", {userName: userName, projectId: projectId, json: jsonText}, 
	function(data) {
		alert(data.jstext);
		myJson = data.jstext;
	});
}

