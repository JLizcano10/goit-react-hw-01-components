import { StatisticsListItem, StatisticsList, StatisticsSection, StatisticsTitle, StatisticsText} from "./Statistics.styles";

const getBackgroundColor = (label) => {
  switch (label) {
    case '.docx':
      return '#4fc4f7';
    case '.pdf':
      return '#a43cf5';
    case '.mp3':
      return '#e64c66';
    case '.psd':
      return '#20b8c5';
    default:
      return '#51c3f8';
  }
};

const Statistics = ({ title, stats }) => {
    return (
        <StatisticsSection className="statistics">
            <StatisticsTitle className="title">{title}</StatisticsTitle>
            <StatisticsList className="stat-list">
                {stats.map(({ id, label, percentage }) => (
                    <StatisticsListItem key={id} style={{ backgroundColor: `${getBackgroundColor(label)}` }} className="item">
                        <StatisticsText>{label}</StatisticsText>
                        <StatisticsText>{`${percentage}%`}</StatisticsText>
                    </StatisticsListItem>
                ))}
            </StatisticsList>
        </StatisticsSection>
  )
}



export default Statistics;