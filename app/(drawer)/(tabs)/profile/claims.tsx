import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../../../../src/components/Customs/CustomText";
import { COLORS } from "../../../../src/Constants/Colors";
import ClaimsList from "../../../../src/components/Profile/ClaimsList";
import { ClaimResponse } from "../../../../src/interfaces/auth/auth.interface";
import { api } from "../../../../src/api/api";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../../../../src/zustand/authStore";

const getClaims = async ({
  queryKey,
}: {
  queryKey: [string, number];
}): Promise<ClaimResponse> => {
  const [, idClient] = queryKey;
  const response = await api.get(`/Reclamos/GetAsync/${idClient},0`);
  return response.data;
};

type Props = {};

const claims = (props: Props) => {
  const { user } = useAuthStore();

  const getClaimsQuery = useQuery({
    queryKey: ["claims", user!.idClient!],
    queryFn: getClaims,
  });
  return (
    <ScrollView>
      <View style={{ paddingBottom: 96 }}>
        {/* HEader */}
        <View style={{ paddingTop: 32, paddingBottom: 16 }}>
          <CustomText
            style={{
              color: COLORS.primary,
              fontSize: 32,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Mis Reclamos
          </CustomText>
        </View>
        {getClaimsQuery.data?.claims && (
          <ClaimsList withTitle={false} data={getClaimsQuery.data?.claims} />
        )}
      </View>
    </ScrollView>
  );
};

export default claims;

const styles = StyleSheet.create({});
