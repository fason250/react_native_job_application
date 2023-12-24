import { View, Text,TouchableOpacity,ActivityIndicator } from 'react-native'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import { COLORS, SIZES } from '../../../constants'
import useFetch from '../../../hooks/useFetch'


const NearbyJobs = () => {
  const router = useRouter()
  const { data, isLoading, error } = useFetch('search',{
    query:'React developer',
    num_page: 1
  })


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {
          isLoading ? (<ActivityIndicator  size="large" color={COLORS.primary}/>) : error ? (<Text>Ooops!! Something Went Wrong</Text>) : (
            data.map((job)=>(
              <NearbyJobCard
               jobs={job} 
               key={`nearby-job-${job?.job_id}`} 
               handleNavigate = {()=> router.push(`/job-details/${job.job_id}`)}
              />
            ))
          )
          }
      </View>
    </View>
  )
}

export default NearbyJobs