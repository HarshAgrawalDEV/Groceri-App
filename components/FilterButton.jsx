import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FilterButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#ddd', borderRadius: 5 }} onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default FilterButton