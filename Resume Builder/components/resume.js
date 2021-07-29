import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import db from '../config';

export default class Resume extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      personaldata: [],
      edudata: [],
      projectdata: [],
      skillsdata: [],
    };
  }

  componentDidMount() {
    const { personaldata, projectdata, edudata, skillsdata } = this.state;

    const eduinfo = db.ref('Educational Info');
    eduinfo.on('value', (data) => {
      const edu = data.val();
      const taskList1 = [];
      for (var id in edu) {
        taskList1.push({ id, ...edu[id] });
      }
      console.log(taskList1);
      if (taskList1.length > 0)
      
        this.setState({ edudata: taskList1.slice(0, 1) });
    });

    const personalinfo = db.ref('Personal Info');
    personalinfo.on('value', (data) => {
      const pers = data.val();
      const taskList2 = [];
      for (var id in pers) {
        taskList2.push({ id, ...pers[id] });
      }
      console.log(taskList2);
      if (taskList2.length > 0)
        this.setState({ personaldata: taskList2.slice(0, 1) });
    });

    const projectinfo = db.ref('Project Info');
    projectinfo.on('value', (data) => {
      const proj = data.val();
      const taskList3 = [];
      for (var id in proj) {
        taskList3.push({ id, ...proj[id] });
      }
      console.log(taskList3);
      if (taskList3.length > 0)
        this.setState({ projectdata: taskList3.slice(0, 1) });
    });

    const skillandintrest = db.ref('skillsandintrest');
    skillandintrest.on('value', (data) => {
      const sandi = data.val();
      const taskList4 = [];
      for (var id in sandi) {
        taskList4.push({ id, ...sandi[id] });
      }
      console.log(taskList4);
      if (taskList4.length > 0)
        this.setState({ skillsdata: taskList4.slice(0, 1) });
    });
  }

   onEnd=()=> {
    const eduinfo = db.ref('Educational Info');
    const skillandintrest = db.ref('skillsandintrest');
    const projectinfo = db.ref('Project Info');
    const personalinfo = db.ref('Personal Info');
    eduinfo.remove();
    personalinfo.remove();
    projectinfo.remove();
    skillandintrest.remove();
  }

  componentDidUpdate(){
    this.onEnd();
  }
 
  render() {
    const { personaldata, projectdata, edudata, skillsdata } = this.state;
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: 'white' }}
        contentContainerStyle={styles.container}>
        <View style={styles.upper}>
          <View
            style={{
              flex: 4,
              borderBottomColor: 'gray',
              borderBottomWidth: 2,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                margin: '4%',
                textAlign: 'right',
              }}>
              {personaldata.map((personalinfo) => (
                <Text>
                  {personalinfo.firstName} {personalinfo.lastName}
                </Text>
              ))}
            </Text>
          </View>

          <View
            style={{
              flex: 6,
              margin: 10,
              justifyContent: 'space-between',
              marginLeft: 20,
            }}>
            <Text style={{ color: 'white' }}>
              {personaldata.map((personalinfo) => (
                <Text>{personalinfo.email}</Text>
              ))}
            </Text>
            <Text style={{ color: 'white' }}>
              {personaldata.map((personalinfo) => (
                <Text>{personalinfo.mob}</Text>
              ))}
            </Text>
            <Text style={{ color: 'white' }}>
              {personaldata.map((personalinfo) => (
                <Text>{personalinfo.github}</Text>
              ))}
            </Text>
            <Text style={{ color: 'white' }}>
              {personaldata.map((personalinfo) => (
                <Text>{personalinfo.linkedin}</Text>
              ))}
            </Text>
          </View>
        </View>
        <View style={styles.lower}>
          <View style={styles.heading}>
            <Text style={{ fontSize: 15, color: 'white' }}>Education</Text>
          </View>
          <View style={{ justifyContent: 'space-between' }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 17,
              }}>
              {edudata.map((eduinfo) => (
                <Text>{eduinfo.collegeoruni}</Text>
              ))}
            </Text>
            <Text
              style={{
                fontWeight: '200',
                fontSize: 13,
              }}>
              {edudata.map((eduinfo) => (
                <Text>
                  {eduinfo.fromdate}-{eduinfo.todate}
                </Text>
              ))}
            </Text>
            <Text style={{ fontWeight: '200', fontSize: 13 }}>
              {edudata.map((eduinfo) => (
                <Text>
                  {eduinfo.course} {eduinfo.branch}
                </Text>
              ))}
            </Text>
          </View>

          <View style={{ marginTop: 15 }}>
            <View style={styles.heading}>
              <Text style={{ fontSize: 15, color: 'white' }}>Project</Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginBottom: 6,
                }}>
                {projectdata.map((projectinfo) => (
                  <Text>{projectinfo.title1}</Text>
                ))}
              </Text>
              <Text
                style={{
                  fontWeight: '200',
                  fontSize: 13,

                  color: 'grey',
                  marginBottom: 8,
                }}>
                {projectdata.map((projectinfo) => (
                  <Text>{projectinfo.link1}</Text>
                ))}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,

                  textAlign: 'justify',
                  marginBottom: 26,
                }}>
                {projectdata.map((projectinfo) => (
                  <Text>{projectinfo.discription1}</Text>
                ))}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginBottom: 6,
                }}>
                {projectdata.map((projectinfo) => (
                  <Text>{projectinfo.title2}</Text>
                ))}
              </Text>
              <Text
                style={{
                  fontWeight: '200',
                  fontSize: 13,
                  color: 'grey',
                  marginBottom: 8,
                }}>
                {projectdata.map((projectinfo) => (
                  <Text>{projectinfo.link2}</Text>
                ))}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  textAlign: 'justify',
                }}>
                {projectdata.map((projectinfo) => (
                  <Text>{projectinfo.discription2}</Text>
                ))}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <View style={styles.heading}>
              <Text style={{ fontSize: 15, color: 'white' }}>
                Skills/Intrest
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 5, margin: 5 }}>
                <Text>
                  {skillsdata.map((skillandintrest) => (
                    <View style={{ flexDirection: 'row', padding: 2 }}>
                      <Text>{'\u2022'}</Text>
                      <Text style={{ marginLeft: 5 }}>
                        {skillandintrest.skill1}
                      </Text>
                    </View>
                  ))}
                </Text>
                <Text>
                  {skillsdata.map((skillandintrest) => (
                    <View style={{ flexDirection: 'row', padding: 2 }}>
                      <Text>{'\u2022'}</Text>
                      <Text style={{ marginLeft: 5 }}>
                        {skillandintrest.skill2}
                      </Text>
                    </View>
                  ))}
                </Text>
                <Text>
                  {skillsdata.map((skillandintrest) => (
                    <View style={{ flexDirection: 'row', padding: 2 }}>
                      <Text>{'\u2022'}</Text>
                      <Text style={{ marginLeft: 5 }}>
                        {skillandintrest.skill3}
                      </Text>
                    </View>
                  ))}
                </Text>
              </View>
              <View style={{ flex: 5, margin: 5 }}>
                <Text>
                  {skillsdata.map((skillandintrest) => (
                    <View style={{ flexDirection: 'row', padding: 2 }}>
                      <Text>{'\u2022'}</Text>
                      <Text style={{ marginLeft: 5 }}>
                        {skillandintrest.intrest1}
                      </Text>
                    </View>
                  ))}
                </Text>
                <Text>
                  {skillsdata.map((skillandintrest) => (
                    <View style={{ flexDirection: 'row', padding: 2 }}>
                      <Text>{'\u2022'}</Text>
                      <Text style={{ marginLeft: 5 }}>
                        {skillandintrest.intrest2}
                      </Text>
                    </View>
                  ))}
                </Text>
                <Text>
                  {skillsdata.map((skillandintrest) => (
                    <View style={{ flexDirection: 'row', padding: 2 }}>
                      <Text>{'\u2022'}</Text>
                      <Text style={{ marginLeft: 5 }}>
                        {skillandintrest.intrest3}
                      </Text>
                    </View>
                  ))}
                </Text>
              </View>
            </View>
          </View>
        </View>
        
      </ScrollView>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  upper: {
    flex: 3,
    backgroundColor: 'black',
  },
  lower: {
    flex: 7,
    backgroundColor: 'white',
    margin: '6%',
  },
  sides: {
    flexDirection: 'row',
  },
  heading: {
    backgroundColor: 'black',
    alignItems: 'center',
    marginBottom: 5,
  },
});
