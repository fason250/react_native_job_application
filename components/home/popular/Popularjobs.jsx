import { useState } from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import useFetch from '../../../hooks/useFetch'


const Popularjobs = () => {
  const router = useRouter()
  const { data, isLoading, error } = useFetch('search',{
    query:'ruby developer',
    num_page: 1
  })
  const [selectedJob, setSelectedJob ] = useState()

  const handleClickCard = item => {

    router.push(`/job-details/${item.job_id}`)
    setSelectedJob(item.job_id)
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {
          isLoading ? (<ActivityIndicator  size="large" color={COLORS.primary}/>) : error ? (<Text>Ooops!! Something Went Wrong</Text>) : (
          <FlatList
            data={data}
            renderItem={({item})=>(
            <PopularJobCard 
              item={item}
              selectedJob={selectedJob}
              handleClickCard={()=>handleClickCard(item)}
            />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
          )
        }
      </View>
    </View>
  )
}

export default Popularjobs