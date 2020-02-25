import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CreateOutlined from '@material-ui/icons/CreateOutlined';

import useStyles from './styles';
import VacancyItem from './VacancyItem';
import Link from '../../../shared/Link';
import FormControlLabel from './VacancyItem/FormControlLabel';
import { getVacancyByFilter } from '../../../store/vacancy/actions';
import DeleteIconWithModal from '../../../shared/DeleteIconWithModal';

const VacancyByHR = ({ vacancy, getVacancyByFilter, user }) => {
	const classes = useStyles();
	const { t } = useTranslation();

	useEffect(() => {
		if (user && user._id) getVacancyByFilter(`hrId=${user._id}`);
	}, [getVacancyByFilter, user]);

	return (
		<div
			className={`${classes.vacancyList} ${
				vacancy && vacancy.length >= 2 ? classes.list : classes.list1
			}`}
		>
			{/*TEST*/}
			<div id={2345} className={classes.vacancy}>
				<Link to={`/hr/vacancy/123456789`} className={classes.link}>
					{t('CANDIDATE')}...
				</Link>
				<div className={classes.vacancyFlex}>
					<div className={classes.vacancyName}>Frontend Developer</div>
					<div>
						<FormControlLabel isActive={true} id={2345} />
					</div>
				</div>
				<div className={classes.vacancyFlex}>
					<div className={classes.vacancyCountry}>Kyiv, Ukraine</div>
					<DeleteIconWithModal text={`${t('DELETE_MESSAGE')}?`} />
				</div>
				<div className={classes.vacancyFlex}>
					<div className={classes.vacancyDate}>{t('POSTED')} 12.02.2020</div>
					<Link to={`/hr/updateVacancy/2345`}>
						<CreateOutlined className={classes.vacancyIcon} />
					</Link>
				</div>
			</div>
			{/*TEST*/}
			{vacancy && vacancy.length === 0 && (
				<div className={classes.vacancyName}>{t('NO_VACANCY')}</div>
			)}
			{vacancy && vacancy.length > 0
				? vacancy.map(elem => {
						return <VacancyItem elem={elem} key={elem._id} />;
				  })
				: null}
		</div>
	);
};

const mapStateToProps = ({ vacancy, hr }) => {
	return {
		user: hr.user,
		vacancy: vacancy.vacancyList,
	};
};

const mapDispatchToProps = {
	getVacancyByFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(VacancyByHR);
