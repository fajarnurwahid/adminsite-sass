const allDropdownSide = document.querySelectorAll('.dropdown-nav-menu');
const profileImage = document.querySelector('nav .profile img');
const profileMenu = profileImage.parentElement.querySelector('.profile-menu');
const allDivider = document.querySelectorAll('#sidebar .divider');




allDropdownSide.forEach(item=> {
	const a = item.parentElement.querySelector('a');

	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdownSide.forEach(i=> {
				const aLink = i.parentElement.querySelector('a');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		item.classList.toggle('show');
		this.classList.toggle('active');
	})
})


profileImage.addEventListener('click', function () {
	profileMenu.classList.toggle('active');
})



window.addEventListener('click', function (e) {
	if(e.target !== profileMenu && e.target !== profileImage) {
		if(profileMenu.classList.contains('active')) {
			profileMenu.classList.remove('active')
		}
	}
})




const toggleSide = document.querySelector('nav .toggle-sidebar');
const sidebar = document.getElementById('sidebar');

toggleSide.addEventListener('click', function () {
	sidebar.classList.toggle('collapse');

	if(sidebar.classList.contains('collapse')) {
		allDivider.forEach(item=> {
			item.textContent = '-';
		})
	} else {
		allDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})



sidebar.addEventListener('mouseenter', function () {
	if(this.classList.contains('collapse')) {
		allDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})




sidebar.addEventListener('mouseleave', function () {
	if(this.classList.contains('collapse')) {
		allDivider.forEach(item=> {
			item.textContent = '-';
		})

		allDropdownSide.forEach(i=> {
			const aLink = i.parentElement.querySelector('a');

			aLink.classList.remove('active');
			i.classList.remove('show');
		})
	}
})




// TODO
const dropdownTodo = document.querySelectorAll('.dropdown-menu-todo');

dropdownTodo.forEach(item=> {
	const icon = item.parentElement.querySelector('i');

	window.addEventListener('click', function (e) {
		if(e.target !== icon && e.target !== item) {
			if(item.classList.contains('active')) {
				item.classList.remove('active')
			}
		}
	})

	icon.addEventListener('click', function () {
		if(!item.classList.contains('active')) {
			dropdownTodo.forEach(i=> {
				i.classList.remove('active');
			})
		}

		item.classList.toggle('active');
	})
})





// APEXCHART
var options = {
  series: [{
  name: 'Inflation',
  data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
}],
  chart: {
  height: 350,
  type: 'bar',
},
plotOptions: {
  bar: {
    borderRadius: 10,
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
},
dataLabels: {
  enabled: true,
  formatter: function (val) {
    return val + "%";
  },
  offsetY: -20,
  style: {
    fontSize: '12px',
    colors: ["#304758"]
  }
},

xaxis: {
  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  position: 'top',
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#D8E3F0',
        colorTo: '#BED1E6',
        stops: [0, 100],
        opacityFrom: 0.4,
        opacityTo: 0.5,
      }
    }
  },
  tooltip: {
    enabled: true,
  }
},
yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: false,
    formatter: function (val) {
      return val + "%";
    }
  }

},
title: {
  text: 'Monthly Inflation in Argentina, 2002',
  floating: true,
  offsetY: 330,
  align: 'center',
  style: {
    color: '#444'
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();