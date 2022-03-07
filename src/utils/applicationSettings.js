import settings from '../settings.json';

const getMasjidName = () => {
    return settings.masjidName;
};

const getAnnouncements = () => {
    return settings.announcement;
};

const getPrayerTimesFileLocation = () => {
    return settings.prayerTimes.fileLocation;
};

const _getMasjidName = getMasjidName;
export { _getMasjidName as getMasjidName };
const _getAnnouncements = getAnnouncements;
export { _getAnnouncements as getAnnouncements };
const _getPrayerTimesFileLocation = getPrayerTimesFileLocation;
export { _getPrayerTimesFileLocation as getPrayerTimesFileLocation };