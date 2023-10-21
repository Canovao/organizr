import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import { Button, View } from 'react-native'

interface RouterProps {
    navigation: NavigationProp<any, any>
}

const MyOrganizr = ({ navigation}: RouterProps) => {

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button onPress={() => {navigation.navigate('datails')}} title="Other page" />
            <Button onPress={() => {FIREBASE_AUTH.signOut()}} title="Logout" />
        </View>
    )
}

export default MyOrganizr
