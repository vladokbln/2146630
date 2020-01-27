let comments = [];
let commentName = 'Гость';
// loadComments();

function enterForm(){
	
	let commentBody = document.getElementById('comment-body');

	let comment = {
		name : commentName,
		body : commentBody.value,
		time : Math.floor(Date.now() / 1000)
	}

	commentName.value = '';
	commentBody.value = '';

	comments.push(comment);
	saveComments();
	showComments();
}
document.getElementById('comment-add').onclick = function() {
	event.preventDefault();
	enterForm();
}
$('#comment-body').keydown(function (e) {

  if (e.ctrlKey && e.keyCode == 13) {
		enterForm()
  }
});
function saveComments(){
	localStorage.setItem('comments', JSON.stringify(comments));
}

// function loadComments(){
// 	if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
// 	showComments();
// }

function showComments (){
	
	let commentField = document.getElementById('comment-field');
	let out = '';
	comments.forEach(function(item){
			out += `<div class="reviews__item">`
			out += `<p class="reviews__name">${item.name}`;
			out += `<span class="reviews__data">${timeConverter(item.time)}</span></p>`;
			out += `<p class="reviews__text">${item.body}</p>`;
			out += `</div>`
	});
	commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
	var a = new Date(UNIX_timestamp * 1000);
	var months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var time = date + ' ' + month + ' ' + year;
	return time;
}