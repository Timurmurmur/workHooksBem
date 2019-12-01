import { connect } from "react-redux";
import {Main, MainProps} from "./Main";
import {Action, State} from "../App/App";
import {Dispatch} from "redux";
import {click} from "./action";
import {TDispatchProps, TStateProps} from "../../common/typings";

interface OwnProps {
    message: string;
}

type StateProps = TStateProps<MainProps, OwnProps>;
type DispatchProps = TDispatchProps<MainProps, OwnProps>;

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps => {
    return {
        route: state.router.pathname as string,
        message2: ownProps.message + '2'
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
    return {
        click: () => {
            dispatch(click());
        }
    }
};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);