import ecommerce1 from "../assets/project-ecommerce-images/ecommerce1.jpg";
import ecommerce2 from "../assets/project-ecommerce-images/ecommerce2.jpg";
import ecommerce3 from "../assets/project-ecommerce-images/ecommerce3.jpg";
import ecommerce4 from "../assets/project-ecommerce-images/ecommerce4.jpg";
import ecommercelogo from "../assets/project-ecommerce-images/ecommercelogo.jpg";

import orderpanel1 from "../assets/project-order-panel-images/orderpanel1.jpg";
import orderpanel2 from "../assets/project-order-panel-images/orderpanel2.jpg";
import orderpanel3 from "../assets/project-order-panel-images/orderpanel3.jpg";
import orderpanel4 from "../assets/project-order-panel-images/orderpanel4.jpg";
import orderpanellogo from "../assets/project-order-panel-images/orderpanellogo.jpg";

import watchlist1 from "../assets/project-watchlist-images/watchlist1.jpg";
import watchlist2 from "../assets/project-watchlist-images/watchlist2.jpg";
import watchlist3 from "../assets/project-watchlist-images/watchlist3.jpg";
import watchlist4 from "../assets/project-watchlist-images/watchlist4.jpg";
import watchlist5 from "../assets/project-watchlist-images/watchlist5.jpg";
import watchlistlogo from "../assets/project-watchlist-images/watchlistlogo.jpg";

import todos1 from "../assets/project-todos-images/todos1.jpg";
import todos2 from "../assets/project-todos-images/todos2.jpg";
import todos3 from "../assets/project-todos-images/todos3.jpg";

import todoslogo from "../assets/project-todos-images/todoslogo.jpg";

export const projectData = [
	{
		id: 0,
		title: "E-Commerce Clothing Website",
		logo: ecommercelogo,
		description:
			"An online clothing online shop complete with most of the actual online shop functionality like cart systems, ability to choose and pick color, and more.",
		image: [ecommerce1, ecommerce2, ecommerce3, ecommerce4],
		sc: "https://github.com/megatronhehe/ecommerce-website",
	},
	{
		id: 1,
		title: "Restaurant Ordering Panel App",
		logo: orderpanellogo,
		description:
			"An app to help restaurant operator to deal with customer orders,complete functionality to CRUD a customer order, and count pricetotal of each order.",
		image: [orderpanel1, orderpanel2, orderpanel3, orderpanel4],
		sc: "https://github.com/megatronhehe/food-ordering-panel",
	},
	{
		id: 2,
		title: "Movie Watchlist Tracker",
		logo: watchlistlogo,
		description:
			"App that helps you keep track on what you have or have not watch. It can be movies, shows, etc.Data fetches using IMDb API, giving access to every movies or shows that ever exist.",
		image: [watchlist1, watchlist2, watchlist3, watchlist4, watchlist5],
		sc: "https://github.com/megatronhehe/movie-watchlist",
	},
	{
		id: 3,
		title: "Todos List",
		logo: todoslogo,
		description:
			"App that helps user to keep track on daily activities for a more organized and structured way to live a life.",
		image: [todos1, todos2, todos3],
		sc: "https://github.com/megatronhehe/to-do-list",
	},
];
