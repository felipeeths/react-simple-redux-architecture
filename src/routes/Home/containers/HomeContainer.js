import { connect } from "react-redux";

import Home from  "../components/Home";

import { 
    getOrders
} from "../modules/home";


const mapStateToProps = (state) => ({
    orders: state.home.orders
});

const mapActionCreators = {
    getOrders
};

export default connect(mapStateToProps, mapActionCreators)(Home);