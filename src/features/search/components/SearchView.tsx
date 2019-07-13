import { RootState } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as couponActions from '../../coupons/actions';
import { Component } from 'react';
import React from 'react';
import { PlaceHolderLoader } from '../../../components/PlaceholderLoader';
import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import UserCard from './UserCard';

const mapStateToProps = ({ search }: RootState) => {
    return {
        isLoading: search.isLoading,
        users: search.users,
        selectedUser: search.selectedUser
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            search: actions.searchUsersAsync.request,
            getUserById: actions.getUserByIdAsync.request,
            resetUser: actions.resetSelectedUser,
            resetCoupons: couponActions.resetCoupons
        },
        dispatch
    );

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

type State = {
    searchValue: string;
}

class SearchView extends Component<Props, State> {
    readonly state = { searchValue: '', userId: '' };

    handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchValue: e.target.value });
        this.props.resetUser();
        this.props.search(e.target.value);
    }

    handleSelectUser = (id: number) => {
        this.props.getUserById(id);
    }

    handleBackToSearch = () => {
        this.props.resetUser();
        this.props.resetCoupons();
    }

    render() {
        let searchResult = null;

        if (this.props.isLoading)
            searchResult = <PlaceHolderLoader />;
        else {
            if (this.props.selectedUser) {
                searchResult = <UserCard user={this.props.selectedUser} backToSearch={this.handleBackToSearch} />
            } else {
                searchResult = this.props.users.map(user => {
                    return <SearchResult key={user.id} user={user} click={() => this.handleSelectUser(user.id)} />
                });
            }
        }

        return (
            <div className='p-2'>
                <input value={this.state.searchValue}
                    placeholder="Введите фио"
                    onChange={this.handleSearchChange}
                    type='text'
                    style={{ width: '100%' }} />
                {searchResult}
            </div >
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchView);