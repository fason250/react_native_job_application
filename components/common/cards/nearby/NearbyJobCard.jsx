import { View, Text,TouchableOpacity,Image } from 'react-native'
import { checkCompanyLogo } from '../../../../utils'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ jobs,handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate} >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{uri: checkCompanyLogo(jobs.employer_logo) ? jobs.employer_logo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"}}
          resizeMode='contain'
          style={styles.logoImage} 
        /> 
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{jobs.job_title}</Text>
        <Text style={styles.jobType}>{jobs.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard