import React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { RootState } from 'typesafe-actions';
import '../component/coupons.css';
import { PlaceHolderLoader } from '../../../components/PlaceholderLoader';

const mapStateToProps = ({ coupons, search }: RootState) => {
    return {
        isLoading: coupons.isLoading,
        coupons: coupons.coupons,
        user: search.selectedUser
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            loadCoupons: actions.loadCouponsAsync.request,
            activateCoupon: actions.activateCoupon
        },
        dispatch
    );

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class CouponsView extends React.Component<Props> {

    componentDidUpdate(prev: Props) {
        if (this.props.user && (prev.user == null || (prev.user && this.props.user.id != prev.user.id))) {
            this.props.loadCoupons(this.props.user.id);
        }
    }

    render() {
        return (
            <div>
                {this.props.isLoading ? <PlaceHolderLoader /> :
                    this.props.coupons.length > 0 ?
                        <div className='text-left'>
                            <h5>Доступные льготы:</h5>
                            <div className='row text-center'>
                                {this.props.coupons && this.props.coupons.filter(x => x.used == false).length > 0 ? this.props.coupons.filter(x => x.used == false).map(coupon =>
                                    <div key={coupon.id} className="card mb-4 shadow-sm">
                                        <div className="card-body">
                                            <p className="card-text">{coupon.title}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" onClick={() => this.props.activateCoupon(coupon.id)} className="btn btn-sm btn-outline-secondary">Активировать</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : <div>Все купоны активированы</div>}
                            </div>
                            <h5>Использованные льготы:</h5>
                            <div className='row text-center'>
                                {this.props.coupons ? this.props.coupons.filter(x => x.used == true).map(coupon =>
                                    <div key={coupon.id} className="card mb-4 shadow-sm">
                                        <div className="card-body">
                                            <p className="card-text">{coupon.title}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-muted">Активирован 14.07.2019</small>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div> : <div>Купоны не найдены</div>}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CouponsView);