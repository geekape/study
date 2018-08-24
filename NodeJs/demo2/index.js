var klass = require('./klass')



// 暴露方法
exports.add = function (klasses) {
	// 班级遍历
	klasses.forEach(function (item, index) {
		var _klass = item
		var teacherName = item.teacherName
		var students = item.students
		
		klass.add('Soldier', ['探病','sdfj'])
	})
}