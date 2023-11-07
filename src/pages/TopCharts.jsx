 
 import { useGetTracksQuery } from "../redux/services/spotify";
const TopCharts = () => {
  const { data, error, isLoading } = useGetTracksQuery(); 
  if (isLoading) {
      return <div>Loading...</div>;
  }
 
  if (error) {
      return <div>Error fetching data: {error.message}</div>;
  } 
  console.log(data);
  return(<>
  TopCharts
  
  </>)
  }
export default TopCharts;
 