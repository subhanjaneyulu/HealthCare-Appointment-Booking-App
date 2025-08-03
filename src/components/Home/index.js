
import {Component} from 'react';
import Header from "../Header";
import SideBar from '../SideBar';
import DoctorPage from '../DoctorPage';

import {HomeContainer,HomeminiContainer,TabContainer,DoctorsContainer,DoctorsBox,SearchBarContainer,SearchInput} from "./styledComponents"

const tabLists = [
  {tabId:"Cardiologist",displayText:"Cardiologist"},
  {tabId:"Dentist",displayText:"Dentist"},
  {tabId:"Dermatologist",displayText:"Dermatologist"},
  {tabId:"Orthopedic",displayText:"Orthopedic"},
  {tabId:"Pediatrician",displayText:"Pediatrician"},
  {tabId:"General Physician",displayText:"General Physician"},
  {tabId:"Gynecologist",displayText:"Gynecologist"},
  {tabId:"ENT Specialist",displayText:"ENT Specialist"},
  {tabId:"Neurologist",displayText:"Neurologist"},
  {tabId:"Oncologist",displayText:"Oncologist"},
  {tabId:"Psychiatrist",displayText:"Psychiatrist"},
  {tabId:"Urologist",displayText:"Urologist"},
  {tabId:"Endocrinologist",displayText:"Endocrinologist"},
  {tabId:"Nephrologist",displayText:"Nephrologist"},
  {tabId:"Rheumatologist",displayText:"Rheumatologist"},
  {tabId:"Pulmonologist",displayText:"Pulmonologist"},
  {tabId:"Hematologist",displayText:"Hematologist"},
  {tabId:"Gastroenterologist",displayText:"Gastroenterologist"},
  {tabId:"Ophthalmologist",displayText:"Ophthalmologist"},
  {tabId:"Allergist",displayText:"Allergist"},
  {tabId:"Immunologist",displayText:"Immunologist"},
  {tabId:"Pathologist",displayText:"Pathologist"},
  {tabId:"Radiologist",displayText:"Radiologist"},
  {tabId:"Surgeon",displayText:"Surgeon"},
  {tabId:"Neonatologist",displayText:"Neonatologist"},
  {tabId:"Anesthesiologist",displayText:"Anesthesiologist"},
  {tabId:"Pediatric Cardiologist",displayText:"Pediatric Cardiologist"},
  {tabId:"Plastic Surgeon",displayText:"Plastic Surgeon"},
  {tabId:"Psychologist",displayText:"Psychologist"},
  {tabId:"Internal Medicine",displayText:"Internal Medicine"},
  {tabId:"Speech Therapist",displayText:"Speech Therapist"},
  {tabId:"Occupational Therapist",displayText:"Occupational Therapist"},
  {tabId:"Rehabilitation",displayText:"Rehabilitation"},
  {tabId:"Geriatric Specialist",displayText:"Geriatric Specialist"},
  {tabId:"Nutritionist",displayText:"Nutritionist"},
  {tabId:"Sports Medicine",displayText:"Sports Medicine"},
  {tabId:"Chiropractor",displayText:"Chiropractor"},
  {tabId:"Clinical Pathologist",displayText:"Clinical Pathologist"},
  {tabId:"Sexologist",displayText:"Sexologist"},
  {tabId:"Veterinary Doctor",displayText:"Veterinary Doctor"},
  {tabId:"CLINICALPSYCHOLOGIST",displayText:"Clinical Psychologist"},
  {tabId:"Family Medicine",displayText:"Family Medicine"},
  {tabId:"Pain Management",displayText:"Pain Management"},
  {tabId:"Emergency Physician",displayText:"Emergency Physician"},
  {tabId:"Palliative Care",displayText:"Palliative Care"},
  {tabId:"Infectious Disease Specialist",displayText:"Infectious Disease Specialist"},
  {tabId:"Geneticist",displayText:"Geneticist"},
  {tabId:"Andrologist",displayText:"Andrologist"},
  {tabId:"Lactation Consultant",displayText:"Lactation Consultant"},
  {tabId:"Nuclear Medicine Specialist",displayText:"Nuclear Medicine Specialist"} 
]

const doctorsData = [
  { "id": 1, "name": "Dr. Priya Sharma", "specialization": "Cardiologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971765/doctor-image2_f3vm17.jpg", "available": true },
  { "id": 2, "name": "Dr. Rakesh Mehta", "specialization": "Dentist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971708/doctor_image4_ah2m9k.jpg", "available": false },
  { "id": 3, "name": "Dr. Sunita Rao", "specialization": "Dermatologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971693/doctor_image_wnkbrh.jpg", "available": true },
  { "id": 4, "name": "Dr. Amit Verma", "specialization": "Orthopedic", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971750/doctor_image5_x3qhru.jpg", "available": false },
  { "id": 5, "name": "Dr. Neha Bansal", "specialization": "Pediatrician", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970878/Ai_female_image_21_daz3dw.jpg", "available": true },
  { "id": 6, "name": "Dr. Anil Kapoor", "specialization": "General Physician", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970920/Ai_male_docote_28_aeb3qh.jpg", "available": true },
  { "id": 7, "name": "Dr. Shreya Iyer", "specialization": "Gynecologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970850/Ai_female_doctors_image_14_gjbivt.jpg", "available": false },
  { "id": 8, "name": "Dr. Vinay Sinha", "specialization": "ENT Specialist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970909/Ai_male_docctor_29_kmg7la.jpg", "available": true },
  { "id": 9, "name": "Dr. Kavita Jain", "specialization": "Neurologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970833/Ai_female_Doctor_pic_f_1_whqvgc.jpg", "available": true },
  { "id": 10, "name": "Dr. Rohan Kulkarni", "specialization": "Oncologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971084/Ai_male_doctor_image_10_rcqqsn.jpg", "available": false },
  { "id": 11, "name": "Dr. Meena Joshi", "specialization": "Psychiatrist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970821/Ai_female_doctor_image12_riy9kt.jpg", "available": true },
  { "id": 12, "name": "Dr. Arvind Menon", "specialization": "Urologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971010/Ai_male_doctor_image_7_zy6mrv.jpg", "available": true },
  { "id": 13, "name": "Dr. Swati Singh", "specialization": "Endocrinologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970786/Ai_female_doctor_image_16_r4ljgt.jpg", "available": false },
  { "id": 14, "name": "Dr. Nitin Gupta", "specialization": "Nephrologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970962/Ai_male_doctor_23_zfip4m.jpg", "available": true },
  { "id": 15, "name": "Dr. Pooja Malhotra", "specialization": "Rheumatologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970544/Ai_female_doctor_image_15_fpllc2.jpg", "available": true },
  { "id": 16, "name": "Dr. Ashok Reddy", "specialization": "Pulmonologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970950/Ai_male_docotr_image_19_hdkuaq.jpg", "available": false },
  { "id": 17, "name": "Dr. Sneha Das", "specialization": "Hematologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970534/Ai_female_doctor_image_8_a8vibb.jpg", "available": true },
  { "id": 18, "name": "Dr. Mohan Jain", "specialization": "Gastroenterologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970892/Ai_image_doctors_26_tppwks.jpg", "available": true },
  { "id": 19, "name": "Dr. Anjali Nair", "specialization": "Ophthalmologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970796/Ai_female_doctor_image_18_g8somr.jpg", "available": false },
  { "id": 20, "name": "Dr. Rajeev Sharma", "specialization": "Allergist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971100/Ai_male_doctor_image_13_t6w46j.jpg", "available": true },
  { "id": 21, "name": "Dr. Varsha Pillai", "specialization": "Immunologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970526/Ai_female_doctor_f_2_fyjlzu.jpg", "available": true },
  { "id": 22, "name": "Dr. Karan Suri", "specialization": "Pathologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971396/Ai_male_doctor_image3_fiiunn.jpg", "available": false },
  { "id": 23, "name": "Dr. Rekha Chauhan", "specialization": "Radiologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970517/Ai_female_doctor_image_9_tv8wka.jpg", "available": true },
  { "id": 24, "name": "Dr. Dinesh Patil", "specialization": "Surgeon", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971463/Ai_male_doctor_imge_11_y0goyu.avif", "available": true },
  { "id": 25, "name": "Dr. Bhavna Thakur", "specialization": "Neonatologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970517/Ai_female_doctor_image_9_tv8wka.jpg", "available": false },
  { "id": 26, "name": "Dr. Harish Kumar", "specialization": "Anesthesiologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971675/doctor_image_3_al9k9n.jpg", "available": true },
  { "id": 27, "name": "Dr. Divya Reddy", "specialization": "Pediatric Cardiologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970806/Ai_female_doctor_image_28_jkpi6f.jpg", "available": true },
  { "id": 28, "name": "Dr. Sanjay Yadav", "specialization": "Plastic Surgeon", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971547/Ai_male_doctors_image_inozzb.jpg", "available": false },
  { "id": 29, "name": "Dr. Ishita Roy", "specialization": "Psychologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970863/Ai_female_dr_image_34_jtaqhn.jpg", "available": true },
  { "id": 30, "name": "Dr. Abhay Joshi", "specialization": "Internal Medicine", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971657/Ai_male_image_22_tzhftb.jpg", "available": true },
  { "id": 31, "name": "Dr. Snehal Borkar", "specialization": "Speech Therapist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971619/Ai_male_dr_image_40_hvqqrs.jpg", "available": false },
  { "id": 32, "name": "Dr. Manoj Tiwari", "specialization": "Occupational Therapist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971440/Ai_male_doctor_image6_z3pzro.jpg", "available": true },
  { "id": 33, "name": "Dr. Pallavi Joshi", "specialization": "Rehabilitation", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970427/Ai_dr_image_33_ntctb1.jpg", "available": true },
  { "id": 34, "name": "Dr. Aditya Rao", "specialization": "Geriatric Specialist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970485/Ai_dr_image_38_v7flwk.jpg", "available": false },
  { "id": 35, "name": "Dr. Leela Nair", "specialization": "Nutritionist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970446/Ai_dr_image_35_ak7nnu.jpg", "available": true },
  { "id": 36, "name": "Dr. Prakash Singh", "specialization": "Sports Medicine", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970470/Ai_dr_image_36_x0czkb.jpg", "available": true },
  { "id": 37, "name": "Dr. Jyoti Sharma", "specialization": "Chiropractor", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970534/Ai_female_doctor_image_8_a8vibb.jpg", "available": false },
  { "id": 38, "name": "Dr. Deepak Das", "specialization": "Clinical Pathologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970496/Ai_dr_male_image_37_pnfphd.jpg", "available": true },
  { "id": 39, "name": "Dr. Nandita Ghosh", "specialization": "Sexologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970821/Ai_female_doctor_image12_riy9kt.jpg", "available": true },
  { "id": 40, "name": "Dr. Ramesh Dutt", "specialization": "Veterinary Doctor", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971571/Ai_male_dr_image_38_zy9abf.jpg", "available": false },
  { "id": 41, "name": "Dr. TaTa Mishra", "specialization": "Clinical Psychologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971750/doctor_image5_x3qhru.jpg", "available": true },
  { "id": 42, "name": "Dr. Satish Babu", "specialization": "Family Medicine", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971423/AI_male_doctor_image5_lilz8d.jpg", "available": true },
  { "id": 43, "name": "Dr. Anuradra Rao", "specialization": "Pain Management", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971268/Ai_male_doctor_image_27_ewtvz3.jpg", "available": false },
  { "id": 44, "name": "Dr. Vivek Chauhan", "specialization": "Emergency Physician", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971142/Ai_male_doctor_image_18_nlbgj7.jpg", "available": true },
  { "id": 45, "name": "Dr. Ram Pillai", "specialization": "Palliative Care", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971116/Ai_male_doctor_image_17_mpbnlg.jpg", "available": true },
  { "id": 46, "name": "Dr. Arjun Sekhar", "specialization": "Infectious Disease Specialist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971100/Ai_male_doctor_image_13_t6w46j.jpg", "available": false },
  { "id": 47, "name": "Dr. Narayan", "specialization": "Geneticist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970979/Ai_male_doctor_30_vu4z1n.jpg", "available": true },
  { "id": 48, "name": "Dr. Suresh Nair", "specialization": "Andrologist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753970994/Ai_male_doctor_32_lcknui.jpg", "available": true },
  { "id": 49, "name": "Dr. Josh", "specialization": "Lactation Consultant", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971229/Ai_male_doctor_image_24_p6jfy1.jpg", "available": false },
  { "id": 50, "name": "Dr. Yashwant Patil", "specialization": "Nuclear Medicine Specialist", "image": "https://res.cloudinary.com/dhdz6ibqe/image/upload/v1753971142/Ai_male_doctor_image_18_nlbgj7.jpg", "available": true }
]

class Home extends Component{
    state = {
    activeTabId:"ALL",
    searchInput : '',
    
    }
  onChangeSearchInput = event => {
    this.setState({ searchInput: event.target.value })
  }
  clickTabItem = tabValue => {
    this.setState({activeTabId:tabValue})
  }

  getFilteredDoctors = () => {
  const { activeTabId, searchInput } = this.state

  const filteredDoctors = doctorsData.filter(eachDoctor => {
    const isTabMatched =
      activeTabId === 'ALL' || eachDoctor.specialization === activeTabId

    const isNameMatched = eachDoctor.name
      .toLowerCase()
      .includes(searchInput.toLowerCase())

    return isTabMatched && isNameMatched
  })

  return filteredDoctors
}

    render (){
      const {activeTabId} = this.state
      const { searchInput } = this.state
      const filteredData = this.getFilteredDoctors()

      return (
          <HomeContainer>
              <Header/>
              <HomeminiContainer>
                  <TabContainer>
                      {tabLists.map(tabDetails=>(
                          <SideBar
                          key={tabDetails.tabId}
                          tabDetails={tabDetails}
                          clickTabItem={this.clickTabItem}
                          isActive={activeTabId === tabDetails.tabId}
                          />
                      ))}
                  </TabContainer>
                    <DoctorsBox>
                          <SearchBarContainer>
                              <SearchInput
                                type="search"
                                  value={searchInput}
                                  onChange={this.onChangeSearchInput}
                                  placeholder="Search by names...."
                              />
                          </SearchBarContainer>
                          <DoctorsContainer>
                              {filteredData.map(doctorDetails=>(
                                      <DoctorPage
                                      key={doctorDetails.id}
                                      doctorDetails ={doctorDetails}
                                      />
                                  ))}
                          </DoctorsContainer>
                    </DoctorsBox>

              </HomeminiContainer>
          </HomeContainer>

      );
    }
}

export default Home;



