import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
      <TouchableOpacity
          style={{ 
              backgroundColor: "#FF9C01",
              minHeight: '62px',
              padding: 12,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: isLoading ? 0.5 : 1,
              borderRadius: 20,
              ...containerStyles
          }}
          activeOpacity={0.7}
        disabled={isLoading}
        onPress={handlePress}
      >
          <Text
              className={`
                text-primary font-psemibold text-lg
                ${textStyles}
                `}
          >
              { title }
          </Text>
    </TouchableOpacity>
  )
}

export default CustomButton;